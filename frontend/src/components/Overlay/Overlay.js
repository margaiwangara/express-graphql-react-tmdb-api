import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';
import { useModal } from '@/context/app/ModalContext';
import Loading from '@/utils/Loading';

const MovieModal = React.lazy(() => import('@/components/Movie/MovieModal'));

const Overlay = () => {
  const { state } = useModal();
  const contentProps = useSpring({
    opacity: state.isOpen ? 1 : 0,
    marginTop: state.isOpen ? '3rem' : '-50rem',
  });

  // check outside click
  const closeModal = (e) => {
    // will be implemented
    // console.log(e.target);
    return;
  };

  return (
    <OverlayContainer
      className="h-100 w-100"
      style={{ display: state.isOpen ? 'block' : 'none' }}
      onClick={closeModal}
    >
      <animated.div className="row mb-5" style={contentProps}>
        <div className="col-md-6 offset-md-3">
          <React.Suspense fallback={Loading()}>
            <MovieModal />
          </React.Suspense>
        </div>
      </animated.div>
    </OverlayContainer>
  );
};

const OverlayContainer = styled.div`
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1000;
  content: '';
  left: 0;
  top: 0;

  .app-modal {
    background-color: var(--blackColor);
    box-shadow: 10px 10px 70px 20px rgba(0, 0, 0, 0.75);
    line-height: 1.5;
    border-radius: 10px;
    position: relative;

    .close-app-modal {
      background-color: var(--primaryAlternativeColor);
      color: var(--blackColor);
      position: absolute;
      right: -10px;
      top: -10px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      height: 40px;
      width: 40px;
      overflow: hidden;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: var(--blackColor);
        color: var(--primaryAlternativeColor);
      }

      &:focus {
        outline: none;
      }
    }
  }

  .video-area {
    width: 100%;
    height: 0;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .video-details {
  }
`;
export default Overlay;
