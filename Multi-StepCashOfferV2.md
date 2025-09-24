🚨 CRITICAL: DO NOT MODIFY

Two-step micro-commitment structure
All button text and copy
Color scheme (#E8743B orange, #10b981 green)
Trust badges and privacy messaging
Form submission logic to Formspree
Conversion tracking implementation
Success page content


Bug Fix #1: Form Shows Step 2 First (HIGHEST PRIORITY)
The Problem
The console shows step 2 is active on load because the restoration logic is automatically advancing to step 2 when it finds a saved address.
Instructions for Fix

Locate the restoration logic in the restorePartialSubmission function
Find where it calls showStep(data.currentStep)
Add a condition that only restores the step if the user has actually completed step 1 in this session
Alternative approach: Comment out the step restoration entirely - only restore the form field values, not the step position
Ensure step 1 always shows first unless user explicitly clicked Continue


Bug Fix #2: Address Data Not Passing to Step 2
The Problem
The address from step 1 isn't being stored properly for step 2 because:

Missing hidden input field in step 2
Input name mismatch (property-location vs address)

Instructions for Fix

Add a hidden input field in step 2 (right after the opening div for step2)

Give it id="hiddenAddress" and name="address"


Update the property-location input name attribute from "property-location" to "address"
Change the input type from "search" to "text" (search type causes issues)
Update autocomplete attribute from "new-password" to "street-address"
Ensure the address value is copied to the hidden field when moving to step 2


Bug Fix #3: Google Maps API Deprecation & Multiple Loading
The Problem
Console shows Google Maps is being loaded multiple times and using deprecated Autocomplete API.
Instructions for Fix

Add a flag to prevent multiple script loading

Check if script already exists before creating new one
Use a global variable like window.googleMapsLoading


Clean up existing scripts before adding new ones
Consider migrating to PlaceAutocompleteElement (the new API) if time permits

But current Autocomplete will still work for existing customers


Add proper async loading as suggested by the warning


Bug Fix #4: Address Component Extraction
The Problem
Not capturing city, state, ZIP from Google Places selection (required by original spec).
Instructions for Fix

Update the autocomplete initialization to request additional fields:

Add 'address_components' to the fields array


In the place_changed handler, extract components:

street_number, route (street name)
locality (city)
administrative_area_level_1 (state)
postal_code (ZIP)


Store these in a global object like window.addressComponents
Include all components in the form submission to Formspree


Design Polish: Input Field Alignment & Spacing
Visual Consistency Requirements

Input field text alignment:

Ensure consistent left padding across all inputs
Account for icons (location pin on address field)
Maintain same text baseline across all fields


Spacing improvements:

Ensure equal vertical spacing between all form groups (16px)
On mobile, ensure form-row items have consistent gap
Fix any spacing jumps between breakpoints


Responsive design polish:

Test padding adjustments at these breakpoints: 320px, 375px, 414px, 768px, 1024px
Ensure icons don't overlap with text at any size
Maintain proportional spacing as screen scales


Icon positioning fixes:

Location pin icon: ensure consistent position
Checkmark: fix positioning relative to dropdown arrow
Dropdown arrow: ensure it doesn't interfere with checkmark




Additional Fixes
1. Remove Duplicate GTM Code

Find and remove the GTM initialization in the head
Keep only the direct Google Ads tracking
This will fix Safari privacy warnings

2. Style Google Places Dropdown

Apply font-family to match form inputs
Ensure border radius matches form style (12px)
Match hover states to form design
Consider hiding "powered by Google" (check terms)

3. Error Messaging Improvements

Update inline error to be more helpful
Show different message if Google Places is blocked
Add positive reinforcement when address is selected

4. Button State Management

Continue button should show descriptive text when disabled
Consider "Select address to continue" when typing
Smooth opacity transitions on state changes


Testing Checklist After Implementation

Step Flow:

 Form always starts on step 1
 Address data transfers to step 2
 Can't proceed without selecting address


Visual Consistency:

 All inputs have same text alignment
 Spacing is consistent at all breakpoints
 No visual jumps when resizing


Data Capture:

 Full address with city, state, ZIP is captured
 All data appears in Formspree submission
 Console shows address components


Performance:

 Google Maps loads only once
 No duplicate API calls
 Smooth transitions between steps




Implementation Order

Fix step 2 showing first (Critical)
Fix address data flow between steps
Add address component extraction
Fix visual spacing/alignment
Polish error messages and button states
Clean up Google Maps loading
Final testing across all breakpoints