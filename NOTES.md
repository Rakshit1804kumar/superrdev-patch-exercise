# Fix 1: Port Conflict
Problem:
Backend failed to start because port 8080 was already in use.

How I found:
Error message in terminal logs.

Fix:
Changed server port to 8081 in application.properties.

Why:
Avoids conflict with existing processes.


# Fix 2: API Not Reaching Backend
Problem:
Frontend API calls returned 404.

How I found:
Checked browser console and network tab.

Fix:
Updated API base URL to http://localhost:8081/api.

Why:
Ensures direct communication with backend.


# Fix 3: Proxy Misconfiguration
Problem:
Vite proxy was not forwarding requests correctly.

Fix:
Bypassed proxy and used direct backend URL.

Why:
More reliable and easier to debug.


# Fix 4: Missing Error Handling
Problem:
Loading state was not updated on API failure.

Fix:
Added setLoading(false) in catch block.

Why:
Prevents UI from getting stuck in loading state.


# Fix 5: Code Improvement
Improvement:
Added default values in custom hook parameters.

Why:
Ensures stable API calls and avoids undefined issues.
