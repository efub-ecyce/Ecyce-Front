import styled from 'styled-components';
import * as font from '../../styles/font';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    background-color: var(--white00);

    @media only screen and (min-width: 768px) {
        width: 768px;
        margin: 0 auto;
    }

    padding: 1.12rem 1.5rem;
    box-sizing: border-box;
    border-radius: 0.625rem;
    box-shadow: 0px 0px 5px 0px rgba(61, 73, 70, 0.20);
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileImg = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
`;

export const UserName = styled.div`
    ${font.bold}
    color: var(--black02);
    font-size: 18px;
    color: #3D4946;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    padding-left: 0.5rem;
    width: 12rem;
`;

export const Stars = styled.div`
    display: flex;
    align-items: center;
    width: 5.25rem;
    height: 5.25rem;
    flex-shrink: 0;
`;

export const StarScore = styled.div`
    ${font.semibold}
    color: var(--gray02);
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 8.3rem;
    height: 1.25rem;
    flex-shrink: 0;
    gap: 0.25rem;
`;

export const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const ReviewText = styled.div`
    ${font.medium}
    color: #889493;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;

    width: 96%;
`;

export const ImagesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
`;

export const SmallImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    width: 50%;
`;

export const Image1 = styled.div`
    width: 10.9375rem;
    height: 12.5rem;
    aspect-ratio: 7 / 8;
    background-color: var(--white01);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Image2 = styled.div`
    width: 10.875rem;
    height: 6.25rem;
    aspect-ratio: 2 / 1;
    background-color: var(--mint04);
    border-top-right-radius: 0.5rem;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Image3 = styled.div`
    width: 10.875rem;
    height: 6.25rem;
    aspect-ratio: 2 / 1;
    background-color: var(--gray02);
    border-bottom-right-radius: 0.5rem;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const WrittenDate = styled.div`
    ${font.regular}
    color: var(--gray01);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
    margin-right: 2rem;
`;