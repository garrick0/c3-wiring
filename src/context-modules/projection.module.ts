/**
 * Projection Context Module
 * Registers all projection-related services
 */

import { Container } from '../Container.js';
import { TOKENS } from '../dependencies.js';
import type { Logger } from '@garrick0/c3-shared';
import {
  GraphLoader,
  ModuleProjectionStrategy,
  ModuleAggregator,
  ModuleDependencyCalculator,
  GraphViewBuilder,
  DagreLayoutEngine,
  JSONGraphExporter,
  GraphMLExporter,
  SVGGraphExporter
} from '@garrick0/c3-projection';
import { TypeScriptExtension, FilesystemExtension } from '@garrick0/c3-parsing';

export function registerProjectionContext(container: Container): void {
  const logger = container.get(TOKENS.LOGGER) as Logger;

  // Register TypeScript Extension
  container.registerSingleton(TOKENS.TYPESCRIPT_EXTENSION, () => {
    return new TypeScriptExtension({
      includePrivateMembers: false,
      excludePatterns: ['node_modules/**', 'dist/**', '**/*.test.ts', '**/*.spec.ts']
    });
  });

  // Register Filesystem Extension
  container.registerSingleton(TOKENS.FILESYSTEM_EXTENSION, () => {
    return new FilesystemExtension();
  });

  // Register GraphLoader
  container.registerSingleton(TOKENS.GRAPH_LOADER, () => {
    const tsExt = container.get(TOKENS.TYPESCRIPT_EXTENSION) as any;
    // Note: Only using TypeScriptExtension for projection
    // TypeScriptExtension already provides file nodes with metadata
    // Using both TypeScript + Filesystem creates duplicate nodes with different IDs

    return new GraphLoader(logger, {
      extensions: [tsExt],  // Only TypeScript extension for module analysis
      cacheEnabled: true
    });
  });

  // Register Module Aggregator
  container.registerSingleton(TOKENS.MODULE_AGGREGATOR, () => {
    return new ModuleAggregator(logger);
  });

  // Register Dependency Calculator
  container.registerSingleton(TOKENS.MODULE_DEPENDENCY_CALCULATOR, () => {
    return new ModuleDependencyCalculator(logger);
  });

  // Register GraphViewBuilder
  container.registerSingleton(TOKENS.GRAPH_VIEW_BUILDER, () => {
    return new GraphViewBuilder(logger);
  });

  // Register Layout Engine
  container.registerSingleton(TOKENS.LAYOUT_ENGINE, () => {
    return new DagreLayoutEngine(
      {
        rankdir: 'TB',
        nodesep: 80,
        ranksep: 100
      },
      logger
    );
  });

  // Register Exporters
  container.registerSingleton(TOKENS.JSON_EXPORTER, () => {
    return new JSONGraphExporter(logger);
  });

  container.registerSingleton(TOKENS.GRAPHML_EXPORTER, () => {
    return new GraphMLExporter(logger);
  });

  container.registerSingleton(TOKENS.SVG_EXPORTER, () => {
    return new SVGGraphExporter(logger);
  });

  console.log('✅ Projection context registered');
}
