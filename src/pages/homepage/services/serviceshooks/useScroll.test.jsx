// src/serviceshooks/useScroll.test.jsx
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScroll } from "./useScroll";

describe("useScroll hook", () => {
  it("should initialize scrollRef and scroll functions", () => {
    const { result } = renderHook(() => useScroll());

    // scrollRef should be defined
    expect(result.current.scrollRef).toBeDefined();

    // scrollLeftArrow and scrollRightArrow should be functions
    expect(typeof result.current.scrollLeftArrow).toBe("function");
    expect(typeof result.current.scrollRightArrow).toBe("function");
  });

  it("should call scrollBy when scrollLeftArrow and scrollRightArrow are invoked", () => {
    const { result } = renderHook(() => useScroll());

    // Mock scrollBy function
    result.current.scrollRef.current = { scrollBy: vi.fn() };

    // Call left arrow scroll
    result.current.scrollLeftArrow();
    expect(result.current.scrollRef.current.scrollBy).toHaveBeenCalledWith({
      left: -300,
      behavior: "smooth",
    });

    // Call right arrow scroll
    result.current.scrollRightArrow();
    expect(result.current.scrollRef.current.scrollBy).toHaveBeenCalledWith({
      left: 500,
      behavior: "smooth",
    });
  });
});
