/* eslint-disable @typescript-eslint/no-unused-vars */

// lib/authService.js
  import { 
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signInWithPopup,
      GoogleAuthProvider,
      signOut as firebaseSignOut,
      sendPasswordResetEmail,
      updateProfile,
      onAuthStateChanged,
      RecaptchaVerifier,
      signInWithPhoneNumber,
    } from "firebase/auth";
    import { auth } from "./firebase";
    
    // Create Google Auth Provider
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
    
    export const authService = {
      // Email/Password Registration
      async registerWithEmail(email, password, firstName, lastName) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          
          // Update the user's display name
          await updateProfile(userCredential.user, {
            displayName: `${firstName} ${lastName}`
          });
    
          return {
            success: true,
            user: userCredential.user
          };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      // Email/Password Sign In
      async signInWithEmail(email, password) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          return {
            success: true,
            user: userCredential.user
          };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      // Google Sign In
      async signInWithGoogle() {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          return {
            success: true,
            user: result.user
          };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      // Phone Number Authentication
      async setupRecaptcha(containerId) {
        try {
          window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved
            }
          });
          return { success: true };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      async sendPhoneVerification(phoneNumber) {
        try {
          const appVerifier = window.recaptchaVerifier;
          const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
          return {
            success: true,
            confirmationResult
          };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      async verifyPhoneCode(confirmationResult, code) {
        try {
          const result = await confirmationResult.confirm(code);
          return {
            success: true,
            user: result.user
          };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      // Sign Out
      async signOut() {
        try {
          await firebaseSignOut(auth);
          return { success: true };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      // Password Reset
      async resetPassword(email) {
        try {
          await sendPasswordResetEmail(auth, email);
          return { success: true };
        } catch (error) {
          return {
            success: false,
            error: this.getErrorMessage(error.code)
          };
        }
      },
    
      // Auth State Observer
      onAuthStateChanged(callback) {
        return onAuthStateChanged(auth, callback);
      },
    
      // Get current user
      getCurrentUser() {
        return auth.currentUser;
      },
    
      // Error message handler
      getErrorMessage(errorCode) {
        switch (errorCode) {
          case 'auth/user-not-found':
            return 'No account found with this email address.';
          case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';
          case 'auth/email-already-in-use':
            return 'An account with this email already exists.';
          case 'auth/weak-password':
            return 'Password should be at least 6 characters long.';
          case 'auth/invalid-email':
            return 'Please enter a valid email address.';
          case 'auth/user-disabled':
            return 'This account has been disabled.';
          case 'auth/too-many-requests':
            return 'Too many failed attempts. Please try again later.';
          case 'auth/network-request-failed':
            return 'Network error. Please check your connection.';
          case 'auth/popup-closed-by-user':
            return 'Sign-in cancelled.';
          case 'auth/cancelled-popup-request':
            return 'Sign-in cancelled.';
          case 'auth/popup-blocked':
            return 'Popup blocked. Please allow popups and try again.';
          case 'auth/invalid-phone-number':
            return 'Please enter a valid phone number.';
          case 'auth/invalid-verification-code':
            return 'Invalid verification code. Please try again.';
          case 'auth/code-expired':
            return 'Verification code has expired. Please request a new one.';
          default:
            return 'An error occurred. Please try again.';
        }
      }
    };