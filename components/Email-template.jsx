// Install @react-email/components if not already
// npm install @react-email/components

import { Html, Body, Container, Section, Heading, Text, Link, Img } from '@react-email/components';

const EmailTemplate = ({ title, description, imageUrl, buttonUrl, buttonText = "View More" }) => (
  <Html>
    <Body style={mainStyles}>
      <Container style={containerStyles}>
        <Section style={headerStyles}>
          <Heading style={titleStyles}>{title}</Heading>
        </Section>

        {imageUrl && (
          <Section style={imageSectionStyles}>
            <Img src={imageUrl} alt="Email Image" style={imageStyles} />
          </Section>
        )}

        <Section style={contentStyles}>
          <Text style={descriptionStyles}>{description}</Text>
          <Link href={buttonUrl} style={buttonStyles}>
            {buttonText}
          </Link>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Inline styles for email compatibility
const mainStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
  padding: '20px',
};

const containerStyles = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  overflow: 'hidden',
};

const headerStyles = {
  backgroundColor: '#4a90e2',
  padding: '20px',
  color: '#ffffff',
  textAlign: 'center',
};

const titleStyles = {
  fontSize: '24px',
  margin: '0',
};

const imageSectionStyles = {
  textAlign: 'center',
  padding: '20px',
};

const imageStyles = {
  maxWidth: '100%',
  height: 'auto',
  borderRadius: '4px',
};

const contentStyles = {
  padding: '20px',
  color: '#333333',
};

const descriptionStyles = {
  fontSize: '16px',
  marginBottom: '20px',
};

const buttonStyles = {
  display: 'inline-block',
  padding: '12px 24px',
  backgroundColor: '#4a90e2',
  color: '#ffffff',
  textDecoration: 'none',
  borderRadius: '4px',
};

export default EmailTemplate;
