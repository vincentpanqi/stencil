import { Logger } from '../declarations';


export function help(process: NodeJS.Process, logger: Logger) {
  const p = logger.dim((process.platform === 'win32') ? '>' : '$');

  console.log(`
  ${logger.bold('Build:')} ${logger.dim('Build components for development or production.')}

    ${p} ${logger.green('stencil build [--dev] [--watch] [--prerender] [--debug]')}

      ${logger.green('--dev')} ${logger.dim('..................')} Execute a development build
      ${logger.green('--watch')} ${logger.dim('................')} Execute a build in watch mode
      ${logger.green('--prerender')} ${logger.dim('............')} Prerender URLs
      ${logger.green('--graph')} ${logger.dim('................')} Write stencil-graph.json file
      ${logger.green('--log')} ${logger.dim('..................')} Write stencil-build.log file
      ${logger.green('--config')} ${logger.dim('...............')} Set stencil config file
      ${logger.green('--docs')} ${logger.dim('.................')} Generate readme.md docs for each component
      ${logger.green('--debug')} ${logger.dim('................')} Set the log level to debug

  ${logger.bold('Examples:')}

    ${p} ${logger.green('stencil build --dev --watch')}
    ${p} ${logger.green('stencil build --prerender')}
    ${p} ${logger.green('stencil init')}

`);
}
