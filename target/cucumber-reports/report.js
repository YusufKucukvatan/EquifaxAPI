$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/test.feature");
formatter.feature({
  "name": "Equifax API Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "error_message": "java.net.ConnectException: Connection refused (Connection refused)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:135)\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2054)\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1450)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1199)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:143)\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:115)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:135)\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1654)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1660)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:156)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\n\tat com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request(ApiStepDefinitions.java:38)\n\tat ✽.user sends GET request(file:///Users/yusufkucukvatan/IdeaProjects/EquifaxAPI/src/test/resources/features/test.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify response body values",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "id is greater than zero",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.id_is_greater_than_zero()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "name is an String type value",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.name_is_an_String_type_value()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "name is not longer than 10 alpha characters",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.name_is_not_longer_than_alpha_characters(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "last is an String type value",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.last_is_an_String_type_value()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "last is not longer than 10 alpha characters",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.last_is_not_longer_than_alpha_characters(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "age is between 0 and 120",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.age_is_between_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "gender is an String type value",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.gender_is_an_String_type_value()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "gender is \"F\" or \"M\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.gender_is_or(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "error_message": "java.net.ConnectException: Connection refused (Connection refused)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2054)\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1450)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1199)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1654)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1660)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\n\tat com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request(ApiStepDefinitions.java:38)\n\tat ✽.user sends GET request(file:///Users/yusufkucukvatan/IdeaProjects/EquifaxAPI/src/test/resources/features/test.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify response response time",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "response time is less than 500 milliseconds",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.response_time_is_less_than_milliseconds(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "accept type is \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.accept_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request",
  "keyword": "When "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request()"
});
formatter.result({
  "error_message": "java.net.ConnectException: Connection refused (Connection refused)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:591)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:121)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2054)\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1450)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1199)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:151)\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1654)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1660)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1041)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:821)\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:184)\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\n\tat com.equifax.stepDefinitions.ApiStepDefinitions.user_sends_GET_request(ApiStepDefinitions.java:38)\n\tat ✽.user sends GET request(file:///Users/yusufkucukvatan/IdeaProjects/EquifaxAPI/src/test/resources/features/test.feature:7)\n",
  "status": "failed"
});
formatter.step({
  "name": "verify that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.verify_that_response_status_code_is(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify data schema",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "validate the data schema is proper",
  "keyword": "Then "
});
formatter.match({
  "location": "com.equifax.stepDefinitions.ApiStepDefinitions.validate_the_data_schema_is_proper()"
});
formatter.result({
  "status": "skipped"
});
});