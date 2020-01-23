import React from "react";
import styled from "styled-components";

const primary = "#1890ff";
const primaryHover = "#40a9ff";

export const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1rem;
  line-height: 1.5;

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  a {
    color: ${primary};
    text-decoration: none;

    transition: color 200ms;

    &:hover {
      color: ${primaryHover};
    }
  }
`;

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  padding-bottom: 6em;
  margin: 0 auto;
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  padding: 20px 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  /* Fix for Safari/iOS date fields */
  min-height: calc(0.9em + (0.8em * 2) + 0.6em);
  padding: 0.8em;
  font-family: sans-serif;
  font-size: 0.9em;
  outline: none;

  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  transition: border 200ms;

  &:focus {
    border: 1px solid #40a9ff;
    -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  /* Change input border to red if error */
  ${({ error }) =>
    error && `border-color: #f5222d !important; box-shadow: none !important;`}
`;

export const SubLabel = styled.span`
  display: block;
  margin-top: -5px;
  padding-bottom: 10px;
  font-size: 0.8em;
`;

export const Error = styled.span`
  display: block;
  padding-top: 10px;
  color: #f5222d;
  font-size: 0.9em;
`;

export const Button = styled.button`
  display: block;
  color: #fff;
  font-size: 1.1em;
  font-weight: 600;
  background-color: ${primary};
  border: 1px solid ${primary};
  border-radius: 4px;
  cursor: pointer;

  min-height: 45px;
  min-width: 120px;
  padding: 5px 25px;
  margin-top: 25px;
  margin-right: 10px;

  transition: transform 200ms, box-shadow 200ms;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    background-color: ${primaryHover};
    border-color: ${primaryHover};
    box-shadow: 0 7px 1em rgba(24, 144, 255, 0.25);
  }
`;

const StyledLoading = styled.svg`
  animation: rotate 1s linear infinite;
  width: 28px;
  height: 28px;

  & .path {
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const Loading = ({ page }) => (
  <StyledLoading viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      stroke={page ? primary : "#fff"}
      fill="none"
      strokeWidth="4"
    />
  </StyledLoading>
);
