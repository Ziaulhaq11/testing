A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Cannot log after tests are done. Did you forget to wait for something async in your test?

Both these are solved by adding {} and return keyword in server.resetHandlers functions while sending ctx response.
