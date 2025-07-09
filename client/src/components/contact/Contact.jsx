import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url('http://mrtaba.ir/image/bg2.jpg');
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
    max-width: 800px;
    margin: auto;
    text-align: center;
`;

const Text = styled(Typography)`
    color: #4a4a4a;
    font-size: 18px;
    margin-top: 20px;
`;

const IconLink = styled(Link)`
    margin: 0 10px;
    color: #333;
    &:hover {
        color: #0072b1;
    }
`;

const Contact = () => {
    return (
        <Box>
            <Banner>Get in Touch</Banner>
            <Wrapper>
                <Typography variant="h3" gutterBottom>Getting in Touch is Easy!</Typography>    
                <Text variant="body1">
                    Send me an email  
                    <IconLink href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank">
                        <Email sx={{ fontSize: 30 }} />
                    </IconLink>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
