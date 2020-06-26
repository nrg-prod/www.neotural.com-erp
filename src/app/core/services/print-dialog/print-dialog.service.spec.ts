import { TestBed } from '@angular/core/testing';

import { PrintDialogService } from './print-dialog.service';

describe('PrintDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrintDialogService = TestBed.get(PrintDialogService);
    expect(service).toBeTruthy();
  });
});
