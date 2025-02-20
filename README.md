# Calgary Landscape Landing Page - Maintenance Guide

This guide will help you maintain and customize the Calgary Landscape landing page. It's written for beginners and provides detailed instructions for common updates.

## Table of Contents
- [Updating Text and Styling](#updating-text-and-styling)
- [Managing Links](#managing-links)
- [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
- [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains your company name and navigation menu. To update:

1. Company Name:
```html
<div class="text-xl font-semibold text-gray-800">
    Calgary Landscape  <!-- Replace this text -->
</div>
```

2. Navigation Menu Items:
```html
<div class="hidden md:flex space-x-8">
    <a href="#services">Services</a>  <!-- Update text here -->
    <a href="#benefits">Benefits</a>  <!-- Update text here -->
    <a href="#faq">FAQ</a>           <!-- Update text here -->
</div>
```

### Hero Section
Update your main headline and subheading:
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
    Calgary Landscape and Design Pros  <!-- Replace main headline -->
</h1>
<p class="text-xl md:text-2xl text-gray-600 mb-12">
    Custom designed landscaping just for you  <!-- Replace subheading -->
</p>
```

### Understanding Tailwind Classes
Common classes explained:
- `text-4xl`: Large text size
- `md:text-5xl`: Larger text on medium screens
- `font-bold`: Bold text weight
- `mb-8`: Bottom margin spacing
- `text-gray-900`: Dark gray text color

To modify styling:
1. Font sizes: Replace `text-4xl` with sizes from `text-sm` to `text-9xl`
2. Colors: Replace `text-gray-900` with colors like `text-blue-500` or `text-green-600`
3. Spacing: Adjust `mb-8` using values like `mb-4` (smaller) or `mb-12` (larger)

## Managing Links

### Navigation Menu Links
Current internal links:
```html
<a href="#services">Services</a>
<a href="#benefits">Benefits</a>
<a href="#faq">FAQ</a>
<a href="#contact">Contact Us</a>
```

To update:
1. For internal sections: Keep the `#` followed by the section's ID
2. For external pages: Replace with full URL
```html
<a href="https://your-website.com/services">Services</a>
```

### Call-to-Action Buttons
Update the "Get Started" button link:
```html
<a href="https://yourwebsite.com" class="inline-block px-8 py-4 bg-gray-900">
    Get Started
</a>
```
Replace `https://yourwebsite.com` with your desired URL.

### Email Links
Update the contact email:
```html
<a href="mailto:youremail@gmail.com">
    Get in Touch
</a>
```
Replace `youremail@gmail.com` with your business email.

## Adding Privacy and Terms Pages

### Footer Links Setup
Locate the Legal section in the footer:
```html
<div class="space-y-4">
    <h3 class="text-lg font-semibold">Legal</h3>
    <ul class="space-y-2">
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
    </ul>
</div>
```

To link privacy and terms pages:
1. Create `privacy.html` and `terms.html` in your website folder
2. Update the links:
```html
<li><a href="privacy.html" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
<li><a href="terms.html" class="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
```

## Troubleshooting

### Common Issues

1. **Broken Internal Links**
   - Ensure section IDs match the href attributes
   - Check for typos in IDs
   - Verify that sections have the correct ID attribute

2. **Responsive Design Issues**
   - Check media query classes (md:, lg:)
   - Verify container widths
   - Test on different screen sizes

3. **Missing Styles**
   - Confirm Tailwind CSS is properly loaded
   - Check for typos in class names
   - Ensure classes are space-separated

### Need Help?
- Double-check all changes before publishing
- Use browser developer tools to inspect elements
- Test all links after updating
- Verify mobile responsiveness using different devices

Remember to:
- Keep a backup of the original code
- Test all changes in a development environment first
- Maintain consistent styling across all pages
- Document any custom modifications

For additional support, consult the [Tailwind CSS documentation](https://tailwindcss.com/docs) or reach out to your web development team.