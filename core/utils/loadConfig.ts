import { loadConfig as unconfigLoad } from 'unconfig'

/** 加载配置文件 */
export async function loadConfig(configPath: string): Promise<{ config?: any; sources?: any }> {
  try {
    const { config, sources } = await unconfigLoad({
      sources: [
        {
          files: configPath,
          // default extensions
          extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
        },
      ],
    })
    return { config, sources }
  } catch (error) {
    return {}
  }
}
