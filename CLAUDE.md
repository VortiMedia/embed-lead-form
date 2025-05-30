# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a high-converting lead form widget designed specifically for embedding in Framer sites to collect real estate cash offers. The form is optimized for maximum conversions with a focus on simplicity and ease of use.

## Purpose & Context

- **Platform**: Framer website embed widget
- **Goal**: Maximize form submission conversions for cash offers on homes
- **Design Philosophy**: Large, clear CTAs with conversion-optimized styling

## Architecture

The application is a single-page form with:
- Self-contained HTML/CSS/JavaScript in `leadform.html` for easy copy/paste into Framer
- Google Maps Places API integration for single-line address autocomplete
- API Key: Set via environment variable (never commit keys to repo)
- Formspree backend for form submission (endpoint: https://formspree.io/f/xblyrjpg)
- Google Tag Manager (GTM) dataLayer integration for analytics and conversion tracking

## Key Components

- **Single Address Field**: Uses Google Places Autocomplete for seamless address entry
- **Contact Fields**: First/last name, email, phone with auto-formatting
- **Hidden Fields**: Parsed address components for data processing
- **CTA Button**: Large, prominent button with #ff6b35 brand color
- **Form Submission**: Async submission with GTM event tracking for conversions
- **Phone Formatting**: Auto-formats US phone numbers as (XXX) XXX-XXXX
- **Responsive Design**: Flexible layout optimized for Framer embed containers

## Conversion Optimization Features

- Large, prominent submit button with high contrast
- Minimal fields to reduce friction
- Single-line address entry with autocomplete
- Clear success/error messaging
- Mobile-optimized touch targets
- Smooth animations and transitions

## GTM Events

The form pushes the following events to dataLayer:
- `formSubmission` event with all form data for conversion tracking
- Additional campaign-specific events to be implemented during campaign setup