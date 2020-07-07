import React from 'react';
import Header from './ui/Header';
import {ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';


function App() {
  return (
    <ThemeProvider theme={theme} color="primary">
     <Header/>
     <h2>
     JIT Setup
The JIT setup requires a section on its own. Honestly, this is one of the most confusing ways of configuring a PHP extension I've ever seen, and I'm afraid the syntax is here to stay, since we're too close to PHP 8's feature freeze for another RFC to make changes to it.

So here goes:

The JIT is enabled by specifying opcache.jit_buffer_size in php.ini. If this directive is excluded, the default value is set to 0, and the JIT won't run.

Next, there are several JIT control options, they are all stored in a single directive called opcache.jit and could, for example, look like this:

opcache.jit_buffer_size=100M
opcache.jit=1235
The RFC lists the meaning of each number. Mind you: this is not a bit mask, each number simply represents another configuration option. The RFC lists the following options:

#O — Optimization level
0	don't JIT
1	minimal JIT (call standard VM handlers)
2	selective VM handler inlining
3	optimized JIT based on static type inference of individual function
4	optimized JIT based on static type inference and call tree
5	optimized JIT based on static type inference and inner procedure analyses
#T — JIT trigger
0	JIT all functions on first script load
1	JIT function on first execution
2	Profile on first request and compile hot functions on second request
3	Profile on the fly and compile hot functions
4	Compile functions with @jit tag in doc-comments
#R — register allocation
0	don't perform register allocation
1	use local liner-scan register allocator
2	use global liner-scan register allocator
#C — CPU specific optimization flags
0	none
1	enable AVX instruction generation
One small gotcha: the RFC lists these options in reverse order, so the first digit represents the C value, the second the R, and so on.

Anyways, the RFC proposes 1235 as the best default, it will do maximum jitting, profile on the fly, use a global liner-scan register allocator — whatever that might be — and enables AVX instruction generation.

In my benchmarks, I'll use several variations of JIT configuration, in order to compare the differences.

So let's start benchmarking!
JIT Setup
The JIT setup requires a section on its own. Honestly, this is one of the most confusing ways of configuring a PHP extension I've ever seen, and I'm afraid the syntax is here to stay, since we're too close to PHP 8's feature freeze for another RFC to make changes to it.

So here goes:

The JIT is enabled by specifying opcache.jit_buffer_size in php.ini. If this directive is excluded, the default value is set to 0, and the JIT won't run.

Next, there are several JIT control options, they are all stored in a single directive called opcache.jit and could, for example, look like this:

opcache.jit_buffer_size=100M
opcache.jit=1235
The RFC lists the meaning of each number. Mind you: this is not a bit mask, each number simply represents another configuration option. The RFC lists the following options:

#O — Optimization level
0	don't JIT
1	minimal JIT (call standard VM handlers)
2	selective VM handler inlining
3	optimized JIT based on static type inference of individual function
4	optimized JIT based on static type inference and call tree
5	optimized JIT based on static type inference and inner procedure analyses
#T — JIT trigger
0	JIT all functions on first script load
1	JIT function on first execution
2	Profile on first request and compile hot functions on second request
3	Profile on the fly and compile hot functions
4	Compile functions with @jit tag in doc-comments
#R — register allocation
0	don't perform register allocation
1	use local liner-scan register allocator
2	use global liner-scan register allocator
#C — CPU specific optimization flags
0	none
1	enable AVX instruction generation
One small gotcha: the RFC lists these options in reverse order, so the first digit represents the C value, the second the R, and so on.

Anyways, the RFC proposes 1235 as the best default, it will do maximum jitting, profile on the fly, use a global liner-scan register allocator — whatever that might be — and enables AVX instruction generation.

In my benchmarks, I'll use several variations of JIT configuration, in order to compare the differences.

So let's start benchmarking!
JIT Setup
The JIT setup requires a section on its own. Honestly, this is one of the most confusing ways of configuring a PHP extension I've ever seen, and I'm afraid the syntax is here to stay, since we're too close to PHP 8's feature freeze for another RFC to make changes to it.

So here goes:

The JIT is enabled by specifying opcache.jit_buffer_size in php.ini. If this directive is excluded, the default value is set to 0, and the JIT won't run.

Next, there are several JIT control options, they are all stored in a single directive called opcache.jit and could, for example, look like this:

opcache.jit_buffer_size=100M
opcache.jit=1235
The RFC lists the meaning of each number. Mind you: this is not a bit mask, each number simply represents another configuration option. The RFC lists the following options:

#O — Optimization level
0	don't JIT
1	minimal JIT (call standard VM handlers)
2	selective VM handler inlining
3	optimized JIT based on static type inference of individual function
4	optimized JIT based on static type inference and call tree
5	optimized JIT based on static type inference and inner procedure analyses
#T — JIT trigger
0	JIT all functions on first script load
1	JIT function on first execution
2	Profile on first request and compile hot functions on second request
3	Profile on the fly and compile hot functions
4	Compile functions with @jit tag in doc-comments
#R — register allocation
0	don't perform register allocation
1	use local liner-scan register allocator
2	use global liner-scan register allocator
#C — CPU specific optimization flags
0	none
1	enable AVX instruction generation
One small gotcha: the RFC lists these options in reverse order, so the first digit represents the C value, the second the R, and so on.

Anyways, the RFC proposes 1235 as the best default, it will do maximum jitting, profile on the fly, use a global liner-scan register allocator — whatever that might be — and enables AVX instruction generation.

In my benchmarks, I'll use several variations of JIT configuration, in order to compare the differences.

So let's start benchmarking!
JIT Setup
The JIT setup requires a section on its own. Honestly, this is one of the most confusing ways of configuring a PHP extension I've ever seen, and I'm afraid the syntax is here to stay, since we're too close to PHP 8's feature freeze for another RFC to make changes to it.

So here goes:

The JIT is enabled by specifying opcache.jit_buffer_size in php.ini. If this directive is excluded, the default value is set to 0, and the JIT won't run.

Next, there are several JIT control options, they are all stored in a single directive called opcache.jit and could, for example, look like this:

opcache.jit_buffer_size=100M
opcache.jit=1235
The RFC lists the meaning of each number. Mind you: this is not a bit mask, each number simply represents another configuration option. The RFC lists the following options:

#O — Optimization level
0	don't JIT
1	minimal JIT (call standard VM handlers)
2	selective VM handler inlining
3	optimized JIT based on static type inference of individual function
4	optimized JIT based on static type inference and call tree
5	optimized JIT based on static type inference and inner procedure analyses
#T — JIT trigger
0	JIT all functions on first script load
1	JIT function on first execution
2	Profile on first request and compile hot functions on second request
3	Profile on the fly and compile hot functions
4	Compile functions with @jit tag in doc-comments
#R — register allocation
0	don't perform register allocation
1	use local liner-scan register allocator
2	use global liner-scan register allocator
#C — CPU specific optimization flags
0	none
1	enable AVX instruction generation
One small gotcha: the RFC lists these options in reverse order, so the first digit represents the C value, the second the R, and so on.

Anyways, the RFC proposes 1235 as the best default, it will do maximum jitting, profile on the fly, use a global liner-scan register allocator — whatever that might be — and enables AVX instruction generation.

In my benchmarks, I'll use several variations of JIT configuration, in order to compare the differences.

So let's start benchmarking!
JIT Setup
The JIT setup requires a section on its own. Honestly, this is one of the most confusing ways of configuring a PHP extension I've ever seen, and I'm afraid the syntax is here to stay, since we're too close to PHP 8's feature freeze for another RFC to make changes to it.

So here goes:

The JIT is enabled by specifying opcache.jit_buffer_size in php.ini. If this directive is excluded, the default value is set to 0, and the JIT won't run.

Next, there are several JIT control options, they are all stored in a single directive called opcache.jit and could, for example, look like this:

opcache.jit_buffer_size=100M
opcache.jit=1235
The RFC lists the meaning of each number. Mind you: this is not a bit mask, each number simply represents another configuration option. The RFC lists the following options:

#O — Optimization level
0	don't JIT
1	minimal JIT (call standard VM handlers)
2	selective VM handler inlining
3	optimized JIT based on static type inference of individual function
4	optimized JIT based on static type inference and call tree
5	optimized JIT based on static type inference and inner procedure analyses
#T — JIT trigger
0	JIT all functions on first script load
1	JIT function on first execution
2	Profile on first request and compile hot functions on second request
3	Profile on the fly and compile hot functions
4	Compile functions with @jit tag in doc-comments
#R — register allocation
0	don't perform register allocation
1	use local liner-scan register allocator
2	use global liner-scan register allocator
#C — CPU specific optimization flags
0	none
1	enable AVX instruction generation
One small gotcha: the RFC lists these options in reverse order, so the first digit represents the C value, the second the R, and so on.

Anyways, the RFC proposes 1235 as the best default, it will do maximum jitting, profile on the fly, use a global liner-scan register allocator — whatever that might be — and enables AVX instruction generation.

In my benchmarks, I'll use several variations of JIT configuration, in order to compare the differences.

So let's start benchmarking!
     </h2>
    </ThemeProvider>
  );
}

export default App;
