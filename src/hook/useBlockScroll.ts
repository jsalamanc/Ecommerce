import { useState, useEffect } from 'react';
/**
 * Usage:
 * const { blockScroll, block,unBlock } = useScrollBlock();
 */
export default () => {
  const [blockScroll, setBlockScroll] = useState<boolean>(false);
  useEffect(() => {
    if (blockScroll === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [blockScroll]);

  const block = () => setBlockScroll(true);
  const unBlock = () => setBlockScroll(false);
  return {
    blockScroll,
    block,
    unBlock,
  };
};
