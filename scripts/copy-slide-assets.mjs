import { cp, mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const talksDir = 'slides/talks'
const decks = await readdir(talksDir, { withFileTypes: true })

await Promise.all(
  decks
    .filter((entry) => entry.isDirectory())
    .map(async (entry) => {
      const src = join(talksDir, entry.name, 'assets')
      const dest = join('dist/talks', entry.name, 'assets')

      try {
        await readdir(src)
      } catch (error) {
        if (error.code === 'ENOENT') return
        throw error
      }

      await mkdir(dest, { recursive: true })
      await cp(src, dest, {
        recursive: true,
        filter: (source) => !source.endsWith('.DS_Store'),
      })
    }),
)
