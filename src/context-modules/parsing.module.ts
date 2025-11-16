/**
 * Parsing Context Module
 * Registers all parsing-related services
 */

import { Container } from '../Container.js';
import { TOKENS } from '../dependencies.js';
import type { Logger } from '@garrick0/c3-shared';
import { ParsingService, InMemoryGraphRepository } from '@garrick0/c3-parsing';

export function registerParsingContext(container: Container): void {
  const logger = container.get(TOKENS.LOGGER) as Logger;

  // Register Graph Repository
  container.registerSingleton(TOKENS.GRAPH_REPOSITORY, () => {
    return new InMemoryGraphRepository();
  });

  // Register Parsing Service (v2.0.0 - graphRepository, logger, extensions[])
  container.registerSingleton(TOKENS.PARSING_SERVICE, () => {
    const graphRepository = container.get(TOKENS.GRAPH_REPOSITORY) as any;
    return new ParsingService(graphRepository, logger, []);
  });

  console.log('✅ Parsing context registered');
}
