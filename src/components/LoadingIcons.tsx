import { Fragment } from "react";
import styled from "styled-components";
import QWStyle from "../style/QWStyle";

const SpinningBolt = styled.img`
  width: 5rem;
  animation: spinning 3s linear infinite;

  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const WordsWithDots = styled.p`
  color: ${QWStyle.colors.Yellow()};
  font-size: 1.5rem;
  letter-spacing: 0.25rem;

  ::after {
    content: ".";
    animation: dots 1.5s steps(5, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      color: ${QWStyle.colors.Black()};
      text-shadow: 0.25em 0 0 ${QWStyle.colors.Black()},
        0.5em 0 0 ${QWStyle.colors.Black()};
    }
    40% {
      color: ${QWStyle.colors.Yellow()};
      text-shadow: 0.25em 0 0 ${QWStyle.colors.Black()},
        0.5em 0 0 ${QWStyle.colors.Black()};
    }
    60% {
      text-shadow: 0.25em 0 0 ${QWStyle.colors.Yellow()},
        0.5em 0 0 ${QWStyle.colors.Black()};
    }
    80%,
    100% {
      text-shadow: 0.25em 0 0 ${QWStyle.colors.Yellow()},
        0.5em 0 0 ${QWStyle.colors.Yellow()};
    }
  }
`;

export function LoadingIcon() {
  return (
    <SpinningBolt
      src={`/images/icons/zap.png`}
      alt="Spinning yellow lightning bolt"
    />
  );
}

export function LoadingWords() {
  return <WordsWithDots>Loading</WordsWithDots>;
}

export function LoadingIconWithWords() {
  return (
    <Fragment>
      <SpinningBolt
        src={`/images/icons/zap.png`}
        alt="Spinning yellow lightning bolt"
      />
      <LoadingWords />
    </Fragment>
  );
}
