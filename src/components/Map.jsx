import React from 'react';
import styled from '@emotion/styled';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';
import dotenv from 'dotenv';

dotenv.config();

const Map = () => {
  return (
    <Wrapper>
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_CLIENT_ID} 
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
      <NaverMap 
        mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
        style={{
          width: '100%',
          height: '100%',
        }}
        defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
        defaultZoom={10}
      />
    </RenderAfterNavermapsLoaded>
  </Wrapper>
  )
}

export default Map;




const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;