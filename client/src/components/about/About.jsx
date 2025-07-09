import { Box, styled, Typography, Link } from '@mui/material';

const Banner = styled(Box)`
    background-image: url('https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg');
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 32px;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled(Box)`
    padding: 40px 20px;
    max-width: 900px;
    margin: auto;
    text-align: center;
`;

const Text = styled(Typography)`
    color: #4a4a4a;
    line-height: 1.6;
    margin-top: 20px;
`;

const SectionTitle = styled(Typography)`
    font-weight: bold;
    margin-top: 30px;
`;

const About = () => {
    return (
        <Box>
            <Banner>Welcome to BlogSphere</Banner>
            <Wrapper>
                <Typography variant="h3" gutterBottom>BlogSphere</Typography>
                
                <SectionTitle variant="h5">About Us</SectionTitle>
                <Text variant="body1">
                    BlogSphere is a space where creativity meets expression. Whether you're a seasoned writer, a passionate storyteller, or someone with ideas to share, our platform is built for you.
                </Text>

                <SectionTitle variant="h5">Our Mission</SectionTitle>
                <Text variant="body1">
                    We believe that every voice matters. Our goal is to provide a user-friendly and engaging platform where people can write, share, and connect through insightful blogs. From tech to travel, personal stories to professional insights, BlogSphere is your go-to destination for diverse content.
                </Text>

                <SectionTitle variant="h5">What We Offer</SectionTitle>
                <Text variant="body1">
                    ✅ <b>Seamless Blogging Experience</b> – Write and publish blogs effortlessly. <br />
                    ✅ <b>Community Engagement</b> – Read, comment, and interact with like-minded individuals. <br />
                    ✅ <b>Custom Profiles</b> – Personalize your space and showcase your best work. <br />
                    ✅ <b>Secure & Reliable</b> – Your content is safe with us.
                </Text>

                <SectionTitle variant="h5">Join Our Community</SectionTitle>
                <Text variant="body1">
                    Become a part of BlogSphere today and start sharing your thoughts with the world. Whether you want to inspire, educate, or entertain, your words have a place here!
                </Text>

                <Text variant="body1" sx={{ mt: 2 }}>
                    🚀 <b>Start Blogging Now!</b>
                </Text>
            </Wrapper>
        </Box>
    );
};

export default About;
