# ExploreKashmirTours Landing Page Implementation Plan

This document contains a step-by-step plan for building the ExploreKashmirTours landing page, broken down into manageable prompts.

## Project Overview
A modern, one-page landing site for a tour agency with a clean design using shadcn UI components, built with React, TypeScript, Vite, and TailwindCSS, deployable to Vercel.

## Implementation Prompts

### Prompt 1: Initial Project Setup

```
Create a modern landing page for ExploreKashmirTours using React, TypeScript, Vite, and shadcn UI components. Following the monorepo architecture:

1. Set up the web app environment:
   - Configure shadcn UI components with consistent theming
   - Set up TailwindCSS according to project standards
   - Install necessary utilities (clsx, tailwind-merge, etc.)

2. Create the file structure following project conventions:
   - Place reusable UI components in `apps/web/src/components/ui/`
   - Create feature components in `apps/web/src/components/`
   - Set up `apps/web/src/assets/` for images
   - Configure routes in `apps/web/src/routes/`

3. Create a responsive layout with:
   - Mobile-first approach using Tailwind's responsive classes
   - A theme inspired by Kashmir's natural beauty (greens, blues, whites)
   - Proper viewport meta settings

4. Initialize basic layout components:
   - Header component with navigation
   - Main content wrapper
   - Footer placeholder

Ensure you're using named exports and following the established patterns from the codebase.
```

### Prompt 2: Hero Section with Call-to-Action

```
Create an engaging hero section for the ExploreKashmirTours landing page:

1. Build a Hero component in `apps/web/src/components/`:
   - Use Tailwind utility classes for layout (flex, spacing, etc.)
   - Implement a full-width background with overlay gradient
   - Use shadcn typography components for consistent text styling
   - Add a prominent CTA button using shadcn Button component

2. Content structure:
   - Heading: "Explore the Paradise on Earth"
   - Subheading: Brief compelling description of Kashmir tours
   - CTA: "Discover Tours" button with appropriate variant/size

3. Ensure responsive behavior:
   - Text size adjustments using Tailwind's responsive modifiers
   - Mobile-optimized layout that expands appropriately on larger screens
   - Maintain appropriate contrast ratios for accessibility

4. Implementation pattern:
   - Use named exports for the component
   - Follow the component structure established in the global rules
   - Use Tailwind utility classes directly rather than custom CSS
   - Keep the component properly typed with TypeScript

Ensure all elements follow the design patterns established in the architecture guidelines.
```

### Prompt 3: Featured Tours Section

```
Implement a Featured Tours section to showcase tour packages:

1. Create a reusable TourCard component in `apps/web/src/components/`:
   - Use shadcn Card component as the base
   - Implement with CardHeader, CardContent, CardFooter structure
   - Add appropriate slots for tour image, name, description, details
   - Use shadcn Button for the CTA

2. Build the FeaturedTours container component:
   - Implement responsive grid layout using Tailwind grid utilities
   - Create proper spacing between cards using gap utilities
   - Use consistent section padding and container width

3. For design consistency:
   - Follow the established shadcn patterns for card elements
   - Use Tailwind's typography classes for text styling
   - Implement hover states consistent with the design system
   - Use proper color variables from the theme

4. Mock data implementation:
   - Create a tours data file in `apps/web/src/data/` (for now)
   - Structure the mock data to match what would come from an API
   - Include all necessary fields: image, title, description, price, duration

Follow type-safe patterns and ensure all components have proper TypeScript interfaces.
```

### Prompt 4: About Section with Company Story

```
Create the About section that builds trust and tells the company story:

1. Implement a split-layout component:
   - Use Tailwind's grid or flex utilities for the two-column layout
   - Create a responsive design that stacks on mobile
   - Add proper padding and margins for consistent spacing

2. For the content area:
   - Use shadcn's typography components for consistent text styling
   - Create a visual hierarchy with headings and paragraphs
   - Add small feature blocks highlighting company values
   - Implement proper line height and letter spacing

3. For the image area:
   - Add a placeholder for an optimized image of Kashmir
   - Set up proper image sizing and object-fit properties
   - Implement a subtle border or shadow consistent with design

4. Use established patterns:
   - Follow component naming and structure from architecture rules
   - Use named exports for all components
   - Apply consistent spacing utilities throughout
   - Include proper TypeScript typing

Ensure the section flows well with the rest of the page and follows all established design guidelines.
```

### Prompt 5: Testimonials Carousel

```
Implement a Testimonials section with a carousel component:

1. Create a TestimonialCard component:
   - Use shadcn Card component as the foundation
   - Add proper structure for quote, author, and rating
   - Implement star rating using appropriate icon components
   - Style quote marks and text for visual appeal

2. Build the carousel functionality:
   - Implement using shadcn components where possible (Carousel if available)
   - Create navigation controls with proper accessibility
   - Set up auto-rotation with pause on hover/focus
   - Ensure smooth transitions between items

3. Responsive considerations:
   - Show single testimonial on mobile devices
   - Display multiple items on larger screens using grid/flex
   - Ensure touch-friendly navigation on mobile
   - Maintain proper spacing at all breakpoints

4. Create realistic testimonial data:
   - Add 4-5 sample testimonials with varied lengths
   - Include author names, locations and tour types
   - Vary the star ratings realistically

Ensure the implementation follows established project patterns and Tailwind usage guidelines.
```

### Prompt 6: Contact Form Implementation

```
Create a contact form section for customer inquiries:

1. Build a form component using shadcn form elements:
   - Use Form, FormField, FormItem, FormLabel, FormMessage components
   - Implement Input, Select, and Textarea components as needed
   - Add a Submit button with appropriate styling
   - Create a responsive layout with proper field spacing

2. Implement form validation with zod:
   - Create a zod schema for form validation
   - Add required field validation for name and email
   - Implement email format validation
   - Add optional validation for other fields

3. Manage form state and submission:
   - Use React's state management for form fields
   - Implement loading states during submission
   - Create success and error state displays
   - Add a simple mock handler for form submission

4. Style considerations:
   - Maintain consistent spacing between form elements
   - Use appropriate field sizes and padding
   - Ensure validation messages are clearly visible
   - Keep styling consistent with the rest of the site

Follow the established project patterns for form handling while maintaining type safety.
```

### Prompt 7: Footer and Final Navigation Elements

```
Complete the landing page with a comprehensive footer section:

1. Create a Footer component:
   - Implement a multi-column layout using Tailwind grid
   - Add company information, navigation links, and social media
   - Include copyright notice with dynamic current year
   - Create a responsive design that stacks appropriately on mobile

2. For the navigation elements:
   - Create a consistent link styling pattern
   - Add hover/focus states for interactive elements
   - Ensure proper spacing between navigation items
   - Group links logically by category

3. For social media:
   - Use appropriate icon components for social platforms
   - Create consistent sizing and spacing for icons
   - Add hover effects that match the site's interaction patterns
   - Ensure proper accessibility for icon-only links

4. Additional navigation features:
   - Implement a "Back to Top" button with smooth scroll
   - Consider adding a sticky header on scroll for easy navigation
   - Ensure all interactive elements have appropriate states

Follow the project's established component structure and Tailwind usage patterns.
```

### Prompt 8: Final Integration and Deployment Preparation

```
Finalize the landing page and prepare it for Vercel deployment:

1. Integrate all sections:
   - Ensure consistent vertical spacing between sections
   - Add smooth scroll behavior for navigation links
   - Check all component integrations for consistency
   - Review overall flow and content spacing

2. Optimize assets and performance:
   - Implement proper image optimization and loading
   - Add lazy loading for below-the-fold images
   - Ensure appropriate component code-splitting
   - Check for any performance bottlenecks

3. Add SEO elements:
   - Update page title and meta description
   - Add Open Graph tags for social sharing
   - Implement proper heading structure (h1, h2, etc.)
   - Add alt text to all images

4. Configure for Vercel deployment:
   - Set up proper build commands in package.json
   - Configure any necessary environment variables
   - Add appropriate Vercel configuration
   - Test the build process locally

5. Final quality checks:
   - Verify responsive behavior across breakpoints
   - Check all interactive elements function correctly
   - Ensure consistent visual styling throughout
   - Verify loading states and transitions

Follow all established project patterns and ensure the site is ready for production deployment.
```

### Prompt 9: Advanced Features and Enhancements

```
Enhance the landing page with additional features for better user experience:

1. Implement a theme toggle:
   - Use shadcn ThemeProvider component
   - Create light/dark mode toggle button
   - Ensure all components respond correctly to theme changes
   - Store user preference in localStorage

2. Add subtle animations:
   - Implement scroll-triggered animations for sections
   - Add micro-interactions for buttons and interactive elements
   - Ensure animations respect reduced-motion preferences
   - Keep animations subtle and purposeful

3. Create a tour gallery component:
   - Build a grid-based image gallery for tour highlights
   - Implement a lightbox for enlarged image viewing
   - Add simple filtering options if needed
   - Use lazy loading for performance

4. Build a FAQ accordion section:
   - Use shadcn Accordion component
   - Create meaningful question and answer pairs
   - Group FAQs by relevant categories
   - Implement smooth expand/collapse animations

5. Ensure all enhancements:
   - Follow the established component patterns
   - Use consistent Tailwind utility classes
   - Maintain proper TypeScript typing
   - Meet accessibility requirements

Keep all implementations consistent with the project's architecture patterns.
```

### Prompt 10: Accessibility and Final Polishing

```
Finalize the project with accessibility improvements and polish:

1. Perform an accessibility audit:
   - Check color contrast ratios against WCAG standards
   - Add appropriate ARIA attributes where needed
   - Verify keyboard navigation works correctly
   - Ensure proper focus management throughout

2. Polish the visual design:
   - Review typography consistency across all sections
   - Check spacing and alignment for precision
   - Verify color usage is consistent with design system
   - Test all interactive states (hover, focus, active)

3. Implement analytics preparation:
   - Add placeholder for analytics script
   - Set up basic event tracking for important interactions
   - Ensure privacy notice for cookie usage
   - Make analytics configurable via environment variables

4. Create documentation:
   - Update README with setup and deployment instructions
   - Document component structure and organization
   - Add comments for any complex logic or patterns
   - Include information about the tech stack and architecture

5. Cross-browser testing:
   - Test on Chrome, Firefox, Safari, and Edge
   - Verify mobile experience on iOS and Android
   - Check for any browser-specific issues
   - Fix any inconsistencies found

Follow all established project patterns to ensure the final product is polished, accessible, and ready for deployment.
```