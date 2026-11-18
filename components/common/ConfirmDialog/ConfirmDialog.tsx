'use client';

import { Button, type ButtonVariant } from '../Button';
import { Modal, type ModalProps } from '../Modal';

export interface ConfirmDialogProps extends Omit<ModalProps, 'footer' | 'mode'> {
  cancelLabel: string;
  confirmLabel?: string;
  onConfirm?: () => void;
  confirmLoading?: boolean;
  confirmDisabled?: boolean;
  confirmVariant?: ButtonVariant;
  mode?: 'dialog' | 'confirmation';
}

export function ConfirmDialog({
  cancelLabel,
  confirmLabel,
  onConfirm,
  confirmLoading = false,
  confirmDisabled = false,
  confirmVariant = 'primary',
  mode = 'confirmation',
  closeDisabled = false,
  ...modalProps
}: ConfirmDialogProps) {
  return (
    <Modal
      {...modalProps}
      mode={mode}
      closeDisabled={closeDisabled || confirmLoading}
      footer={(
        <>
          <Button
            type="button"
            variant="outline"
            onClick={modalProps.onClose}
            disabled={closeDisabled || confirmLoading}
          >
            {cancelLabel}
          </Button>
          {confirmLabel && onConfirm && (
            <Button
              type="button"
              variant={confirmVariant}
              onClick={onConfirm}
              loading={confirmLoading}
              disabled={confirmDisabled || confirmLoading}
            >
              {confirmLabel}
            </Button>
          )}
        </>
      )}
    />
  );
}
