# 📝 Shark Tank Lingo - Content Editing Guide

This guide explains exactly where and how to edit all the content in your Shark Tank Lingo website. Each section shows you which files to modify for different types of content changes.

## 🏗️ Project Structure Overview

```
client/src/
├── data/                    # All content data files
│   ├── businessTerms.ts     # Main terms and categories 
│   ├── detailedBlogPosts.ts # Blog articles
│   ├── quizData.ts          # Quiz questions
│   └── detailedLearningPaths.ts # Learning path content
├── components/              # UI components that display content
│   ├── TermCard.tsx         # How term cards look
│   ├── CompactTermCard.tsx  # Smaller term cards
│   ├── BlogSection.tsx      # Blog section display
│   ├── QuizSection.tsx      # Quiz interface
│   └── ui/                  # Basic UI components
├── pages/                   # Full page components
│   ├── TermDetail.tsx       # Individual term pages
│   ├── BlogDetail.tsx       # Individual blog pages
│   ├── CategoryPage.tsx     # Category listing pages
│   └── Home.tsx             # Homepage
└── types/                   # Data structure definitions
    └── index.ts             # Type definitions
```

## 📚 Editing Business Terms

### Adding/Editing Term Cards and Term Pages

**📁 File: `client/src/data/businessTerms.ts`**

This is the most important file - it contains ALL business terms and categories.

#### Adding a New Category:
```typescript
// Add to businessCategories object (around line 4)
'your-new-category': {
  name: 'Your Category Name',
  description: 'Description of this category',
  slug: 'your-new-category',
  icon: '📊',  // Choose an emoji
  color: 'from-green-500 to-emerald-600'  // Tailwind gradient
}
```

#### Adding a New Business Term:
```typescript
// Add to businessTerms array (around line 100)
{
  id: 'your-term-id',
  term: 'Your Business Term',
  category: 'existing-category-slug',
  icon: '💰',
  businessDefinition: 'Professional business definition here',
  simpleExplanation: 'Easy-to-understand explanation for beginners',
  sharkTankExample: '"Quote from a shark about this term"',
  sharkName: 'Shark Name',
  realWorldExample: 'Real company example showing this term in action',
  difficulty: 'beginner', // or 'intermediate' or 'advanced'
  relatedTerms: ['term-id-1', 'term-id-2'], // Optional
  metaTitle: 'SEO title for this term',
  metaDescription: 'SEO description for this term'
}
```

#### Editing Existing Terms:
- Find the term by searching for its `id` or `term` name
- Modify any field you want to change
- The changes will automatically appear on both term cards and detail pages

### Customizing How Terms Display

**📁 File: `client/src/components/TermCard.tsx`**
- Edit how terms appear in grid/list views
- Modify card layout, colors, or information shown
- Change category icons and colors

**📁 File: `client/src/pages/TermDetail.tsx`**
- Edit how individual term pages look
- Modify the detailed view layout
- Add/remove sections from term pages

## 📰 Editing Blog Content

### Adding/Editing Blog Posts

**📁 File: `client/src/data/detailedBlogPosts.ts`**

#### Adding a New Blog Post:
```typescript
// Add to detailedBlogPosts array
{
  id: 'unique-blog-id',
  title: 'Your Blog Post Title',
  excerpt: 'Short description that appears in blog cards',
  date: 'Jan 15, 2024',
  category: 'Analysis', // or 'Case Study', 'Guide', etc.
  image: 'https://images.unsplash.com/photo-...', // Featured image URL
  categoryColor: 'bg-shark-blue/10 text-shark-blue',
  author: 'Author Name',
  readTime: '8 min read',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  content: `Your full blog post content here.
  
  **Use Markdown formatting:**
  - Bold text with **text**
  - Lists like this
  - Headers with ## Header Name
  
  You can write multiple paragraphs and include examples.`
}
```

#### Editing Existing Blog Posts:
- Find the post by its `id` or `title`
- Modify any field including the full `content`
- Blog content supports Markdown formatting

### Customizing Blog Display

**📁 File: `client/src/components/BlogSection.tsx`**
- Edit how blog posts appear on the homepage
- Modify blog card layout and styling

**📁 File: `client/src/pages/BlogDetail.tsx`**
- Edit individual blog post page layout
- Modify how blog content is displayed

## 🧠 Editing Quiz Content

### Adding/Editing Quiz Questions

**📁 File: `client/src/data/quizData.ts`**

#### Adding a New Quiz Question:
```typescript
// Add to quizQuestions array
{
  id: 'q99', // Unique ID
  question: 'Your quiz question here?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 1, // Index of correct option (0, 1, 2, or 3)
  explanation: 'Explain why this answer is correct',
  hint: 'Helpful hint for users',
  relatedTerm: 'business-term-id' // Optional: link to a business term
}
```

#### Editing Existing Questions:
- Find question by `id` or search the question text
- Modify question, options, or explanation
- Change the `correctAnswer` index if needed

### Customizing Quiz Display

**📁 File: `client/src/components/QuizSection.tsx`**
- Edit quiz interface and styling
- Modify how questions and results appear

## 🎯 Editing Learning Paths

**📁 File: `client/src/data/detailedLearningPaths.ts`**

This file contains structured learning paths that group related terms together.

#### Adding a New Learning Path:
```typescript
{
  id: 'path-id',
  title: 'Learning Path Title',
  description: 'What this path teaches',
  duration: '2 hours',
  difficulty: 'beginner',
  modules: [
    {
      id: 'module-1',
      title: 'Module Title',
      description: 'Module description',
      terms: ['term-id-1', 'term-id-2'],
      duration: '30 min'
    }
  ]
}
```

## 🎨 Editing Visual Appearance

### Colors and Styling

**📁 File: `client/src/components/TermCard.tsx`**
- Edit `categoryColors` object (lines 16-22) to change category colors
- Modify `categoryIcons` object (lines 8-14) to change category icons

**📁 File: `client/src/pages/TermDetail.tsx`**
- Edit `categoryIcons` object (lines 10-28) for detail page icons

### Global Styling

**📁 File: `client/src/index.css`**
- Global CSS styles and custom color definitions

**📁 File: `tailwind.config.ts`**
- Tailwind CSS configuration and custom theme settings

## 🏠 Editing Homepage Sections

**📁 File: `client/src/pages/Home.tsx`**
- Edit homepage layout and sections
- Add/remove components from homepage

**📁 File: `client/src/components/Hero.tsx`**
- Edit hero section content and messaging

**📁 File: `client/src/components/GlossarySection.tsx`**
- Edit main glossary section display

## 🧭 Editing Navigation

**📁 File: `client/src/components/Navigation.tsx`**
- Edit main navigation menu
- Add/remove navigation links
- Modify navigation styling

**📁 File: `client/src/components/Footer.tsx`**
- Edit footer content and links

## 📱 Adding New Data Types

If you want to add completely new types of content:

1. **Define Types**: Edit `client/src/types/index.ts` to add new TypeScript interfaces
2. **Create Data Files**: Add new files in `client/src/data/` for your content
3. **Create Components**: Add new components in `client/src/components/` to display the content
4. **Add Pages**: Create new pages in `client/src/pages/` if needed
5. **Update Navigation**: Add links in `Navigation.tsx`

## 🚀 Quick Content Updates

### Most Common Edits:

1. **Add a new business term**: Edit `businessTerms.ts` → Add new object to array
2. **Update term definition**: Edit `businessTerms.ts` → Find term → Change fields
3. **Add new blog post**: Edit `detailedBlogPosts.ts` → Add new object to array
4. **Add quiz question**: Edit `quizData.ts` → Add new question object
5. **Change category**: Edit `businessTerms.ts` → Modify `businessCategories` object

### After Making Changes:

1. Save the file
2. The website will automatically reload with your changes
3. Check that everything looks correct
4. Test any new content you added

## 💡 Pro Tips:

- **Always use unique IDs** for new terms, blog posts, and quiz questions
- **Test your changes** by navigating to the affected pages
- **Keep consistent formatting** when adding new content
- **Use meaningful category slugs** (lowercase, hyphenated)
- **Include SEO metadata** (`metaTitle`, `metaDescription`) for better search rankings
- **Backup your data files** before making major changes

## 🆘 Troubleshooting:

- **Website won't load after changes**: Check the browser console for errors
- **TypeScript errors**: Make sure your data matches the type definitions in `types/index.ts`
- **Images not showing**: Verify image URLs are working and accessible
- **Content not updating**: Make sure you saved the file and refresh the page

This guide covers all the major content editing scenarios. The beauty of this structure is that most content changes only require editing the data files in the `client/src/data/` folder!