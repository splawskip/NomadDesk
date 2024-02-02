import { Code } from 'bright';

import theme from './theme';
import { CodeSnippetProps } from '@/types';

function CodeSnippet(props : CodeSnippetProps) {
  return (
    <Code
      {...props}
	  lineNumbers
      theme={theme}
    />
  );
}

export default CodeSnippet;
