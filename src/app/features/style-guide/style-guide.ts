import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AccessibilityShowcase } from './components/accessibility-showcase/accessibility-showcase';
import { ComponentsShowcase } from './components/components-showcase/components-showcase';
import { FoundationsShowcase } from './components/foundations-showcase/foundations-showcase';
import { IdentityShowcase } from './components/identity-showcase/identity-showcase';
import { LanguageShowcase } from './components/language-showcase/language-showcase';

@Component({
  selector: 'app-style-guide',
  imports: [
    IdentityShowcase,
    FoundationsShowcase,
    LanguageShowcase,
    ComponentsShowcase,
    AccessibilityShowcase,
  ],
  templateUrl: './style-guide.html',
  styleUrl: './style-guide.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StyleGuide {}
