/**
 * Dependency tokens for service registration
 * Centralized place for all DI tokens
 */

/**
 * Infrastructure tokens
 */
export const TOKENS = {
  // Infrastructure
  LOGGER: 'Logger',
  CACHE: 'Cache',
  METRICS: 'Metrics',

  // Configuration
  CONFIG_SERVICE: 'ConfigurationService',
  PRESET_MANAGER: 'PresetManager',
  CONFIG_TRANSFORMER: 'ConfigTransformer',
  CONFIG_WATCHER: 'ConfigWatcher',

  // Parsing Context
  PARSING_SERVICE: 'ParsingService',
  GRAPH_BUILDER: 'GraphBuilder',
  GRAPH_REPOSITORY: 'GraphRepository',
  FILE_SYSTEM: 'FileSystem',

  // Parsers
  FILESYSTEM_PARSER: 'FilesystemParser',
  TYPESCRIPT_PARSER: 'TypeScriptParser',
  PYTHON_PARSER: 'PythonParser',

  // Compliance Context
  COMPLIANCE_SERVICE: 'ComplianceService',
  RULE_MANAGEMENT_SERVICE: 'RuleManagementService',
  EVALUATION_ENGINE: 'EvaluationEngine',
  REMEDIATION_SERVICE: 'RemediationService',
  RULE_REPOSITORY: 'RuleRepository',

  // Evaluators
  DEPENDENCY_EVALUATOR: 'DependencyEvaluator',
  NAMING_EVALUATOR: 'NamingEvaluator',
  STRUCTURE_EVALUATOR: 'StructureEvaluator',

  // Fixers
  RENAME_FIXER: 'RenameFixer',
  MOVE_FIXER: 'MoveFixer',

  // Projection Context
  PROJECTION_SERVICE: 'ProjectionService',
  PROJECTION_ENGINE: 'ProjectionEngine',
  GRAPH_TRANSFORMER: 'GraphTransformer',
  VIEW_REPOSITORY: 'ViewRepository',

  // Renderers
  SVG_RENDERER: 'SvgRenderer',
  ASCII_RENDERER: 'AsciiRenderer',

  // Discovery Context
  DISCOVERY_SERVICE: 'DiscoveryService',
  PATTERN_DETECTION_SERVICE: 'PatternDetectionService',
  RULE_INFERENCE_SERVICE: 'RuleInferenceService',
  DOCUMENTATION_ANALYZER: 'DocumentationAnalyzer',
  PATTERN_REPOSITORY: 'PatternRepository',

  // LLM
  LLM_PROVIDER: 'LlmProvider',

  // Pattern Matchers
  REGEX_PATTERN_MATCHER: 'RegexPatternMatcher',
  AST_PATTERN_MATCHER: 'AstPatternMatcher',

  // Analyzers
  NAMING_ANALYZER: 'NamingAnalyzer',
  README_ANALYZER: 'ReadmeAnalyzer',

  // Factories
  PARSER_FACTORY: 'ParserFactory',
  EVALUATOR_FACTORY: 'EvaluatorFactory',
  RENDERER_FACTORY: 'RendererFactory',

  // Extensions (c3-parsing v2.0.0)
  TYPESCRIPT_EXTENSION: 'TypeScriptExtension',
  FILESYSTEM_EXTENSION: 'FilesystemExtension',

  // Graph Services
  GRAPH_LOADER: 'GraphLoader',

  // Module Analysis Services (c3-projection)
  MODULE_AGGREGATOR: 'ModuleAggregator',
  MODULE_DEPENDENCY_CALCULATOR: 'ModuleDependencyCalculator',
  MODULE_PROJECTION_STRATEGY: 'ModuleProjectionStrategy',
  GRAPH_VIEW_BUILDER: 'GraphViewBuilder',
  LAYOUT_ENGINE: 'LayoutEngine',

  // Exporters
  JSON_EXPORTER: 'JSONExporter',
  GRAPHML_EXPORTER: 'GraphMLExporter',
  SVG_EXPORTER: 'SVGExporter'
} as const;

export type Token = typeof TOKENS[keyof typeof TOKENS];
