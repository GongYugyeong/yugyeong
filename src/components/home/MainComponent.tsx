'use client';

import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import styled from 'styled-components';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #fff;
`;

export default function MainComponent() {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <>
      {/* ref를 Header에 전달 */}
      <Header ref={headerRef} />

      <Wrapper>
        <Section1 headerRef={headerRef} />
        <Section2 />
        <Section3 />
        <Section4 />
      </Wrapper>

      <Footer />
    </>
  );
}
