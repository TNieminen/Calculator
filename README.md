# Calculator
A simple calculator service including a frontend and a API for the logic

# Assignment

=== Description ==

	Your task is to setup a simple web service to implement a calculator. The service offers an endpoint that reads a string input and parses it. It should return either an HTTP error code, or a solution to the calculation in JSON form.

	An example calculus query:

	Original query: 2 * (23/(3*3))- 23 * (2*3)
	With encoding: MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk

=== API Description ==

	Endpoint:

	GET /calculus?query=[input]
	The input can be expected to be UTF-8 with BASE64 encoding
	Return:
	On success: JSON response of format: { error: false, result: number }
	On error: Either a HTTP error code or: { error: true, message: string }
	Supported operations: + - * / ( )

== Technical constraints ==

	There are some constraints that you need to follow. These are followed by some tips and ideas that you can choose to follow if you wish.

	Required:
Use a programming language of your choice.
The API needs to be testable online from Futurice office.
Consider adding automated tests where it makes sense.
When writing your code, imagine the service is meant to be released to production (with a low-to-moderate expected load).
Heroku or AWS might be a good place to publish your service. Please document your deployment process.
The source code should be shared, either on public repository or a repository that Futurice can access. For example, GitHub is a good option.

Please provide us your code and explanation by next Monday evening, so that your interview partners have a bit of time to review it.

# SEO
https://medium.com/binarcode/make-your-vue-js-application-seo-friendly-dea3d004a58c


https://github.com/abbr/deasync/issues/106


https://cli.vuejs.org/guide/creating-a-project.html#vue-create


Chakra 

https://codesandbox.io/s/chakra-ui-vue-starter-2sy0g?file=/package.json:337-343


# TODO

- [ ] Add commitlint
- [ ] Finish up frontend
- [ ] Create backend
- [ ] Play around with theming