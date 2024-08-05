import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #CACACA;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`

export const Header = styled.div`
    background-color: #291313;
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    padding: 20px;
    width: 100%;
`

export const Content = styled.div`
    background-color: #FAFAFA;
    border-radius: 20px;
    margin-top: 15vh;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`