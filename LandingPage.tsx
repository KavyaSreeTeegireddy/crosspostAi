import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'John Doe',
    content: 'This tool transformed my content workflow!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    content: 'Quick, easy, and powerful – a must-have for creators.',
    rating: 4,
  },
  {
    name: 'Emily Johnson',
    content: 'CrossPost AI saved me hours of editing time.',
    rating: 5,
  },
];

const LandingPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
        <Container maxWidth="md" style={{ textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom>
            Create Once. Share Everywhere.
          </Typography>
          <Typography variant="h6" paragraph>
            Automatically resize, caption, and export your videos for YouTube Shorts,
            Instagram Reels, and Facebook – all in one click.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            How It Works
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
            {[
              {
                title: 'Upload Your Video',
                description: 'Drag and drop or browse your video file. We accept all major formats.',
              },
              {
                title: 'Select Platforms',
                description: 'Choose which platforms to generate videos for (YouTube Shorts, Reels, etc).',
              },
              {
                title: 'Generate & Download',
                description: 'We resize, caption, and process your videos instantly – ready to download and post.',
              },
            ].map((feature, index) => (
              <Card key={index} style={{ maxWidth: 300, flex: 1 }}>
                <CardHeader title={feature.title} />
                <CardContent>
                  <Typography>{feature.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '4rem 0' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            What Creators Are Saying
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '1rem',
                  maxWidth: 320,
                  boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {testimonial.name}
                </Typography>
                <p style={{ color: '#334155', marginBottom: '1rem' }}>
                  "{testimonial.content}"
                </p>
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;

