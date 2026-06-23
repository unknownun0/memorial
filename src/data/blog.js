const blogPosts = [
  {
    slug: 'planning-a-dignified-farewell',
    title: 'Planning a Dignified Farewell: A Step-by-Step Guide',
    excerpt: 'A step-by-step guide to planning a meaningful memorial service.',
    content: `Planning a dignified farewell can be a healing process that celebrates a life well-lived.

## 1. Choose the Right Location
Select a meaningful location — a chapel, garden, or memorial park that holds significance.

## 2. Personalize the Service
Incorporate favorite music, photo displays, meaningful readings, and cherished belongings.

## 3. Coordinate with Family
Open communication ensures everyone feels included. Share roles and responsibilities.

## 4. Plan the Reception
A post-service gathering allows family and friends to share memories and offer comfort.

## 5. Consider Long-Term Memorialization
A permanent marker or columbarium niche provides a lasting place for remembrance.

At Memorial Ready, we guide you through every step with compassion.`,
    image: 'https://i.pinimg.com/736x/8b/2c/e7/8b2ce705d80e3690fa93cf58eba2b945.jpg',
    date: 'June 15, 2026',
    author: 'Maria Santos',
    category: 'Guidance',
  },
  {
    slug: 'understanding-cremation-options',
    title: 'Understanding Cremation Options in the Philippines',
    excerpt: 'An overview of cremation services, costs, and considerations.',
    content: `Cremation is becoming an increasingly popular choice for families in the Philippines.

## Types of Cremation Services

### Direct Cremation
The body is cremated shortly after death without a formal service. The most affordable option.

### Traditional Cremation with Service
Includes a formal viewing or funeral service before cremation.

### Cremation with Memorial Service
The body is cremated first, followed by a service with the urn present.

## Cost Considerations
Costs typically range from PHP 30,000 to PHP 100,000 depending on the service type.

## Columbarium Niches
After cremation, many choose to place the urn in a columbarium niche in a serene garden setting.

For personalized guidance, our team is here to help.`,
    image: 'https://i.pinimg.com/736x/04/c1/d8/04c1d872ee54b6dc218663e40a24c2d4.jpg',
    date: 'June 8, 2026',
    author: 'Juan dela Cruz',
    category: 'Services',
  },
  {
    slug: 'benefits-of-pre-need-memorial-plans',
    title: '5 Key Benefits of Pre-Need Memorial Plans',
    excerpt: 'Why securing a pre-need plan provides peace of mind and financial protection.',
    content: `Pre-need plans are one of the most thoughtful gifts you can give your family.

## 1. Financial Protection
Lock in today's prices and protect your family from future inflation.

## 2. Peace of Mind
Knowing arrangements are taken care of provides comfort for you and your loved ones.

## 3. Flexible Payment Terms
Affordable monthly payment options designed to fit your budget.

## 4. Personalized Arrangements
Time and freedom to thoughtfully design your memorial as you envision.

## 5. Perpetual Care
All plans include perpetual care, ensuring beautiful grounds for generations.

Contact Memorial Ready to learn more about our pre-need plans.`,
    image: 'https://i.pinimg.com/736x/85/86/99/85869909226e41cbeb57370703da5964.jpg',
    date: 'May 28, 2026',
    author: 'Memorial Ready Team',
    category: 'Planning',
  },
  {
    slug: 'choosing-memorial-lot-location',
    title: 'How to Choose the Perfect Memorial Lot Location',
    excerpt: 'Key factors when selecting a memorial lot — scenic views, accessibility, and maintenance.',
    content: `Choosing a memorial lot is a deeply personal decision. Here are key factors to consider.

## 1. Scenic Beauty
Look for natural beauty — mature trees, gardens, water features, and peaceful vistas.

## 2. Accessibility
Consider proximity to roads, available parking, and walkability within the park.

## 3. Long-Term Maintenance
Choose a park with strong commitment to perpetual care and well-maintained grounds.

## 4. Available Amenities
Chapels, pavilions, walking paths, and sitting areas enhance the experience.

## 5. Memorialization Options
Some lots allow upright monuments, others restrict to flat plaques.

At Memorial Ready, we offer various lot options to suit every family.`,
    image: 'https://i.pinimg.com/736x/64/50/f8/6450f89b4f1da72af45eba3095c18d47.jpg',
    date: 'May 20, 2026',
    author: 'Maria Santos',
    category: 'Guidance',
  },
  {
    slug: 'memorial-service-etiquette',
    title: 'Memorial Service Etiquette: What to Do and Say',
    excerpt: 'A guide on proper etiquette for attending memorial services with grace.',
    content: `Attending a memorial service can be challenging. Here is how to navigate it with grace.

## What to Wear
Dark or muted colors. Men: dark suit or slacks. Women: dark dress or pantsuit.

## What to Bring
A sympathy card, flowers (if appropriate), and tissues.

## What to Say
"I am so sorry for your loss." Share a brief, positive memory if you have one.

## What Not to Say
Avoid "They are in a better place" or "I know how you feel."

## During the Service
Arrive early, silence your phone, and follow the lead of the family.

Showing up and being present is the most meaningful gesture.`,
    image: 'https://i.pinimg.com/736x/47/8f/57/478f57b3ad171660d754455d163a1cb6.jpg',
    date: 'May 12, 2026',
    author: 'Juan dela Cruz',
    category: 'Guidance',
  },
  {
    slug: 'columbary-vs-traditional-burial',
    title: 'Columbary vs. Traditional Burial: Making the Right Choice',
    excerpt: 'Compare columbary niches and traditional burial to find the best option.',
    content: `Each option has distinct advantages. Here is a side-by-side comparison.

## Columbary Niches
**Advantages**: Space-efficient, lower cost, less maintenance, indoor protection.
**Considerations**: Limited personalization, less traditional.

## Traditional Burial
**Advantages**: Larger space, full monuments, garden setting, multiple interments.
**Considerations**: Higher cost, ongoing maintenance, land scarcity.

## Making the Decision
Consider your family's traditions, budget, and long-term visitation plans.

At Memorial Ready, we offer both options and can help you decide.`,
    image: 'https://i.pinimg.com/1200x/65/f2/6b/65f26b5b9729a58f78f5fd222aa27252.jpg',
    date: 'April 30, 2026',
    author: 'Memorial Ready Team',
    category: 'Services',
  },
];

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getCategories() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];
  return ['All', ...categories];
}

export function getRecentPosts(count = 3) {
  return blogPosts.slice(0, count);
}

export default blogPosts;
