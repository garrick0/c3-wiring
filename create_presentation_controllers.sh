#!/bin/bash
set -e

# Create presentation directories
mkdir -p contexts/parsing/presentation
mkdir -p contexts/compliance/presentation
mkdir -p contexts/projection/presentation
mkdir -p contexts/discovery/presentation

# Parsing controllers
cat > contexts/parsing/presentation/ParsingController.ts << 'EOF'
import { Request, Response } from 'express';
import { ParsingService } from '../domain/services/ParsingService.js';

export class ParsingController {
  constructor(private parsingService: ParsingService) {}

  async parseCodebase(req: Request, res: Response): Promise<void> {
    const { rootPath } = req.body;
    const graph = await this.parsingService.parseCodebase(rootPath);
    res.json({ graphId: graph.id, nodeCount: graph.getNodeCount() });
  }
}
EOF

# Compliance controllers
cat > contexts/compliance/presentation/ComplianceController.ts << 'EOF'
import { Request, Response } from 'express';
import { EvaluationEngine } from '../domain/services/EvaluationEngine.js';

export class ComplianceController {
  constructor(private evaluationEngine: EvaluationEngine) {}

  async checkCompliance(req: Request, res: Response): Promise<void> {
    res.json({ message: 'Compliance check endpoint' });
  }
}
EOF

# Projection controllers
cat > contexts/projection/presentation/ProjectionController.ts << 'EOF'
import { Request, Response } from 'express';
import { ProjectionEngine } from '../domain/services/ProjectionEngine.js';

export class ProjectionController {
  constructor(private projectionEngine: ProjectionEngine) {}

  async generateProjection(req: Request, res: Response): Promise<void> {
    res.json({ message: 'Projection generation endpoint' });
  }
}
EOF

# Discovery controllers
cat > contexts/discovery/presentation/DiscoveryController.ts << 'EOF'
import { Request, Response } from 'express';
import { PatternDetectionService } from '../domain/services/PatternDetectionService.js';

export class DiscoveryController {
  constructor(private patternDetection: PatternDetectionService) {}

  async discoverPatterns(req: Request, res: Response): Promise<void> {
    res.json({ message: 'Pattern discovery endpoint' });
  }
}
EOF

echo "Presentation controllers created"
