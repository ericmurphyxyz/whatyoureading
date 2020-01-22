import React from "react";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  font-size: 1rem;
  line-height: 1.5;

  * {
    box-sizing: border-box;
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  padding: 20px 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 425px;
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
  background-color: #1890ff;
  border: 1px solid #1890ff;
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
    background-color: #40a9ff;
    border-color: #40a9ff;
    box-shadow: 0 7px 1em rgba(24, 144, 255, 0.25);
  }
`;

const StyledLoading = styled.svg`
  animation: rotate 1s linear infinite;
  width: 28px;
  height: 28px;

  & .path {
    stroke: #fff;
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

export const Loading = () => (
  <StyledLoading viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledLoading>
);
