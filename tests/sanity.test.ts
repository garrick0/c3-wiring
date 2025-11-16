import { describe, it, expect } from 'vitest';
import { Container } from '../src/Container.js';
import { TOKENS } from '../src/dependencies.js';

describe('c3-wiring package sanity tests', () => {
  it('should be importable', () => {
    expect(Container).toBeDefined();
    expect(TOKENS).toBeDefined();
  });

  it('should have all dependency tokens defined', () => {
    // Verify critical tokens exist
    expect(TOKENS.LOGGER).toBeDefined();
    expect(TOKENS.GRAPH_LOADER).toBeDefined();
    expect(TOKENS.PARSER_FACTORY).toBeDefined();
    expect(TOKENS.RENDERER_FACTORY).toBeDefined();
  });
});
