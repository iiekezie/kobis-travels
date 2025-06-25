import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component and checks main content', () => {
  render(<App />);

  // Check if the header is rendered
  const logoElement = screen.getByRole('img', { name: /logo/i });
  expect(logoElement).toBeInTheDocument();

  // Check navigation links
  const homeLink = screen.getByText(/home/i);
  const aboutLink = screen.getByText(/about/i);
  const servicesLink = screen.getByText(/services/i);
  const contactLink = screen.getByText(/contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(servicesLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();

  // Check hero section content
  const heroHeading = screen.getByRole('heading', { name: /personalized support for your academic, travel & visa goals/i });
  expect(heroHeading).toBeInTheDocument();

  const ctaButton = screen.getByText(/book a consultation/i);
  expect(ctaButton).toBeInTheDocument();

  // Check WhatsApp, Call, Email buttons
  const whatsappButton = screen.getByText(/whatsapp/i);
  const callButton = screen.getByText(/call us/i);
  const emailButton = screen.getByText(/email/i);

  expect(whatsappButton).toBeInTheDocument();
  expect(callButton).toBeInTheDocument();
  expect(emailButton).toBeInTheDocument();

  // Check About Us section
  const aboutSection = screen.getByText(/about us/i);
  expect(aboutSection).toBeInTheDocument();

  // Check Services section
  const servicesSection = screen.getByText(/our services/i);
  expect(servicesSection).toBeInTheDocument();

  const mentorshipCard = screen.getByText(/one-on-one mentorship/i);
  expect(mentorshipCard).toBeInTheDocument();

  // Check Consultation form fields
  const consultationSection = screen.getByText(/book a consultation/i);
  expect(consultationSection).toBeInTheDocument();

  const nameInput = screen.getByPlaceholderText(/your name/i);
  const emailInput = screen.getByPlaceholderText(/your email/i);
  const messageInput = screen.getByPlaceholderText(/your message/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();

  // Check Contact info
  const phoneText = screen.getByText(/\+234 814 357 4770/i);
  const emailText = screen.getByText(/kobistravelsandtours@gmail.com/i);
  expect(phoneText).toBeInTheDocument();
  expect(emailText).toBeInTheDocument();

  // Check Footer
  const footerText = screen.getByText(/all rights reserved/i);
  expect(footerText).toBeInTheDocument();
});
