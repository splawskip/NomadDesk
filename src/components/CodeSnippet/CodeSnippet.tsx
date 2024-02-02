import { Code } from 'bright';
import { CodeSnippetProps } from '@/types';

import theme from './theme';

function CodeSnippet(props : CodeSnippetProps) {
  // Build component.
  return (
    <Code
      {...props}
	  lineNumbers
      theme={theme}
    />
  );
}

export default CodeSnippet;
