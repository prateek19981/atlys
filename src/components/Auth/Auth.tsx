import React, { useState, useEffect } from "react";
import LoginIcon from '../../assets/log-in-2.svg';
import { validateAuthForm, simulateAuth, toggleBodyScroll } from './helpers/Auth.helpers';

import {
  ANIMATION_DURATION,
  GRADIENTS,
  BACKGROUNDS,
  BORDER_RADIUS,
  SPACING,
  TRANSFORMS,
  FOCUS_STATES,
  BORDERS,
  SIZES,
  TYPOGRAPHY,
  LAYOUT,
  TRANSITIONS,
  SHADOWS,
  STATE_STYLES,
  TEXT_CONTENT,
  LABELS,
  PLACEHOLDERS,
  LOADING_TEXT,
} from './constants/auth.constants';
import type { AuthModalProps } from './constants/auth.interface';

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  mode, 
  onToggleMode, 
  onAuth 
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let timer: number | undefined;
    if(isOpen)
    {
       timer = setTimeout(() => {
         setIsVisible(true);
         toggleBodyScroll(isOpen);
         setIsClosing(false);
       }, 10);
     } else {
    toggleBodyScroll(isOpen);
       setIsVisible(false);
       setIsClosing(false);
     }

    return () => {
      toggleBodyScroll(false);
      clearTimeout(timer)
    };
  }, [isOpen]);

  const handleClose = (): void => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
      setError('');
    }, ANIMATION_DURATION);
  };

  const handleSubmit = async (): Promise<void> => {
    if (!isFormValid) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const authResult = await simulateAuth(mode, email, password, name);
      if (authResult.success && authResult.user) {
        onAuth(authResult.user);
        handleClose();
        setEmail('');
        setPassword('');
        setName('');
      } else {
        setError(authResult.error || 'Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    if (error) setError('');
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  if (!isOpen && !isVisible) return null;

  const currentText = TEXT_CONTENT[mode];
  const isFormValid = validateAuthForm(email, password, name, mode);
  return (
    <div 
      className={`${LAYOUT.modal.position} ${LAYOUT.modal.flex} ${SPACING.container} ${TRANSITIONS.backdrop} ${
        isVisible && !isClosing 
          ? BACKGROUNDS.backdrop.visible
          : BACKGROUNDS.backdrop.hidden
      }`}
      onClick={handleClose}
    >
      <div 
        className={`${LAYOUT.content.position} ${BACKGROUNDS.modal} ${BORDER_RADIUS.modal} ${SHADOWS.modal} ${LAYOUT.content.width} ${SIZES.modal} ${TRANSITIONS.all} ${
          isVisible && !isClosing
            ? TRANSFORMS.modal.visible
            : TRANSFORMS.modal.hidden
        }`}
        onClick={handleModalClick}
      >
        <div className={`absolute inset-0 ${BORDER_RADIUS.modal} bg-gradient-to-r ${GRADIENTS.border} ${SPACING.border} ${STATE_STYLES.loading.animation}`}>
          <div className={`${BACKGROUNDS.modal} ${BORDER_RADIUS.modal} h-full w-full`} />
        </div>
        
        <div className={`${LAYOUT.content.position} ${BACKGROUNDS.modal} ${BORDER_RADIUS.modal} ${SPACING.modal}`}>
          <div className="flex flex-col justify-between items-center mb-8">
            <div className={`${LAYOUT.iconWrapper} ${SIZES.iconContainer} ${BORDER_RADIUS.iconContainer} ${BACKGROUNDS.iconContainer}`}>
              <img 
                src={LoginIcon} 
                alt="login-icon" 
                height={SIZES.icon.height} 
                width={SIZES.icon.width}
              />
            </div>
            
            <div className={`flex flex-col space-y-2 ${LAYOUT.textCenter}`}>
              <h2 className={`${TYPOGRAPHY.heading.size} ${TYPOGRAPHY.heading.weight} bg-gradient-to-r ${GRADIENTS.text} ${TYPOGRAPHY.heading.gradient} flex justify-center ml-[40px]`}>
                {currentText.title}
              </h2>
              <p className={`${TYPOGRAPHY.description.color} ${TYPOGRAPHY.description.size} ml-[40px]`}>
                {currentText.description}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-6">
            {mode === 'signup' && (
              <div className={`space-y-2 ${TRANSITIONS.all} ${LAYOUT.inputContainer}`}>
                <label className={`block ${TYPOGRAPHY.label.size} ${TYPOGRAPHY.label.weight} ${TYPOGRAPHY.label.color}`}>
                  {LABELS.fullName}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className={`w-full ${SPACING.input} ${BORDERS.input.default} ${BORDER_RADIUS.input} ${FOCUS_STATES.input} ${TRANSITIONS.fast} ${BORDERS.input.hover} ${error ? 'border-red-300 focus:border-red-500' : ''}`}
                  placeholder={PLACEHOLDERS.name}
                  required
                />
              </div>
            )}

            <div className={`space-y-2 ${TRANSITIONS.all} ${LAYOUT.inputContainer}`}>
              <label className={`block ${TYPOGRAPHY.label.size} ${TYPOGRAPHY.label.weight} ${TYPOGRAPHY.label.color}`}>
                {LABELS.email}
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full ${SPACING.input} ${BORDERS.input.default} ${BORDER_RADIUS.input} ${FOCUS_STATES.input} ${TRANSITIONS.fast} ${BORDERS.input.hover} ${error ? 'border-red-300 focus:border-red-500' : ''}`}
                placeholder={PLACEHOLDERS.email}
                required
              />
            </div>

            <div className={`space-y-2 ${TRANSITIONS.all} ${LAYOUT.inputContainer}`}>
              <label className={`block ${TYPOGRAPHY.label.size} ${TYPOGRAPHY.label.weight} ${TYPOGRAPHY.label.color}`}>
                {LABELS.password}
              </label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={`w-full ${SPACING.input} ${SPACING.inputRight} ${BORDERS.input.default} ${BORDER_RADIUS.input} ${FOCUS_STATES.input} ${TRANSITIONS.fast} ${BORDERS.input.hover} ${error ? 'border-red-300 focus:border-red-500' : ''}`}
                placeholder={PLACEHOLDERS.password}
                required
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading || !isFormValid}
              className={`${LAYOUT.content.position} w-full bg-gradient-to-r ${GRADIENTS.button} text-white py-3 ${BORDER_RADIUS.input} ${TYPOGRAPHY.button.weight} ${TYPOGRAPHY.button.size} ${SHADOWS.button.default} ${SHADOWS.button.hover} ${TRANSFORMS.button.hover} ${TRANSITIONS.fast} ${FOCUS_STATES.button} ${STATE_STYLES.disabled.opacity} ${STATE_STYLES.disabled.cursor} ${TRANSFORMS.button.disabled} ${SHADOWS.button.disabled} overflow-hidden group`}
            >
              {isLoading && (
                <div className={`absolute inset-0 ${BACKGROUNDS.loadingOverlay}`}>
                  <div className={`absolute inset-0 ${BACKGROUNDS.loadingPulse} ${STATE_STYLES.loading.animation}`} />
                </div>
              )}
              <span className={`${LAYOUT.content.position} ${LAYOUT.buttonContent}`}>
                {isLoading && (
                  <svg className={`${STATE_STYLES.loading.spinner} ${SIZES.spinner}`} fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                )}
                {isLoading ? LOADING_TEXT : currentText.button}
              </span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className={TYPOGRAPHY.toggleText}>
              {currentText.togglePrompt}
            </p>
            <button
              onClick={onToggleMode}
              className={`mt-2 text-blue-600 hover:text-purple-600 ${TYPOGRAPHY.button.weight} ${TRANSITIONS.fast} ${TRANSFORMS.link.hover}`}
            >
              {currentText.toggleAction}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;