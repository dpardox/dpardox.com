import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Web } from '@layouts/web/web';

import { CvLinks } from './enums/cv-links';
import { CvDocumentMetadataService } from './services/cv-document-metadata';

@Component({
  selector: 'app-cv',
  imports: [Web],
  templateUrl: './cv.html',
  providers: [CvDocumentMetadataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CV implements OnInit, OnDestroy {
  private readonly documentMetadata = inject(CvDocumentMetadataService);
  public readonly linkedInLink = CvLinks.LinkedIn;
  public readonly websiteLink = CvLinks.Website;

  public ngOnInit(): void {
    this.documentMetadata.apply();
  }

  public ngOnDestroy(): void {
    this.documentMetadata.restore();
  }
}
