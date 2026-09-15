import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { CvMetadata } from '../enums/cv-metadata';

@Injectable()
export class CvDocumentMetadataService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private canonicalElement?: HTMLLinkElement;
  private previousCanonicalUrl: string | null = null;
  private previousDescription: string | null = null;
  private previousLanguage = '';
  private previousTitle = '';

  public apply(): void {
    this.storePreviousMetadata();
    this.title.setTitle(CvMetadata.Title);
    this.document.documentElement.lang = CvMetadata.Language;
    this.meta.updateTag({ name: CvMetadata.DescriptionName, content: CvMetadata.Description });
    this.applyCanonicalUrl();
  }

  public restore(): void {
    this.title.setTitle(this.previousTitle);
    this.document.documentElement.lang = this.previousLanguage;
    this.restoreDescription();
    this.restoreCanonicalUrl();
  }

  private storePreviousMetadata(): void {
    this.previousTitle = this.title.getTitle();
    this.previousLanguage = this.document.documentElement.lang;
    this.previousDescription = this.meta.getTag(`name="${CvMetadata.DescriptionName}"`)?.content ?? null;
    this.canonicalElement = this.document.querySelector<HTMLLinkElement>(CvMetadata.CanonicalSelector) ?? undefined;
    this.previousCanonicalUrl = this.canonicalElement?.href ?? null;
  }

  private applyCanonicalUrl(): void {
    if (!this.canonicalElement) {
      this.canonicalElement = this.document.createElement('link');
      this.canonicalElement.rel = CvMetadata.CanonicalRelation;
      this.document.head.appendChild(this.canonicalElement);
    }

    this.canonicalElement.href = CvMetadata.CanonicalUrl;
  }

  private restoreDescription(): void {
    if (this.previousDescription === null) {
      this.meta.removeTag(`name="${CvMetadata.DescriptionName}"`);
      return;
    }

    this.meta.updateTag({ name: CvMetadata.DescriptionName, content: this.previousDescription });
  }

  private restoreCanonicalUrl(): void {
    if (!this.canonicalElement) return;

    if (this.previousCanonicalUrl === null) {
      this.canonicalElement.remove();
      return;
    }

    this.canonicalElement.href = this.previousCanonicalUrl;
  }
}
