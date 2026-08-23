import os

def update_file(path, search, replace):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace(search, replace)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# Update layout.tsx
layout_path = r'c:\sw\swasthik new website\app\layout.tsx'
layout_search = '''export const metadata: Metadata = {
  title: "Swasthik Ayurveda | Premium Ayurvedic Care",
  description: "Experience the most premium root-cause-focused Ayurvedic healing and personalized therapies.",
};'''
layout_replace = '''export const metadata: Metadata = {
  title: "Swasthik Ayurveda | Best Ayurvedic Clinic in Hyderabad",
  description: "Experience the most premium root-cause-focused Ayurvedic healing and personalized therapies for Sciatica, Back Pain, and more at Swasthik Ayurveda.",
  keywords: ["Ayurveda", "Ayurvedic Clinic", "Hyderabad", "Sciatica Treatment", "Back Pain Treatment", "Natural Healing", "Ayurvedic Hospital", "Kukatpally", "Dr. Krishna Mohan"],
  authors: [{ name: "Swasthik Ayurveda" }],
  openGraph: {
    title: "Swasthik Ayurveda | Premium Ayurvedic Care",
    description: "Experience the most premium root-cause-focused Ayurvedic healing.",
    url: "https://www.swastikayurveda.com/",
    siteName: "Swasthik Ayurveda",
    type: "website",
  },
};'''
update_file(layout_path, layout_search, layout_replace)
