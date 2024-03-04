# docker-puppeteer

A spike to test how to run Puppeteer on a server environment.

# 🖥️ Local enviroment test ✅

This boilerplate code works on

- CPU: arm64
- OS: macOS Sonoma 14.2.1
- Node: 18.21.1
- Browser: Chrome 122.0.6261.94 (Official Build) (arm64) (default for Puppeteer)

# 🐳 Docker enviroment intention

The intention is to move to

- CPU: arm64
- OS: Any ARM Linux distro
- Node: Any Node version superior to 16 (minimum for Puppeteer)
- Browser: Any version of Chrome that works or even Firefox

## Puppeteer error in Docker enviroment

### Error 1

When trying to open Chrome withouth having it installed

```
file:///app/node_modules/@puppeteer/browsers/lib/esm/launch.js:258
                reject(new Error([
                       ^

Error: Failed to launch the browser process!
rosetta error: failed to open elf at /lib64/ld-linux-x86-64.so.2



TROUBLESHOOTING: https://pptr.dev/troubleshooting

    at Interface.onClose (file:///app/node_modules/@puppeteer/browsers/lib/esm/launch.js:258:24)
    at Interface.emit (node:events:531:35)
    at Interface.close (node:internal/readline/interface:527:10)
    at Socket.onend (node:internal/readline/interface:253:10)
    at Socket.emit (node:events:531:35)
    at endReadableNT (node:internal/streams/readable:1696:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)

Node.js v21.6.2
```

### Error 2

When installing Chrome but not having permisions to run it

```
file:///app/node_modules/@puppeteer/browsers/lib/esm/launch.js:258
                reject(new Error([
                       ^

Error: Failed to launch the browser process!
[0304/090902.638776:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.


TROUBLESHOOTING: https://pptr.dev/troubleshooting

    at Interface.onClose (file:///app/node_modules/@puppeteer/browsers/lib/esm/launch.js:258:24)
    at Interface.emit (node:events:525:35)
    at Interface.close (node:readline:590:8)
    at Socket.onend (node:readline:280:10)
    at Socket.emit (node:events:525:35)
    at endReadableNT (node:internal/streams/readable:1358:12)
    at processTicksAndRejections (node:internal/process/task_queues:83:21)
```

### Error 3

When adding permisions to open the browser

```
file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/common/WaitTask.js:47
            this.#timeoutError = new TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`);
                                 ^

TimeoutError: Waiting for selector `.contextual-sign-in-modal__screen` failed: Waiting failed: 30000ms exceeded
    at new WaitTask (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/common/WaitTask.js:47:34)
    at IsolatedWorld.waitForFunction (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/api/Realm.js:22:26)
    at Function.waitFor (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/common/QueryHandler.js:167:95)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async CdpFrame.waitForSelector (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/api/Frame.js:466:21)
    at async CdpPage.waitForSelector (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/api/Page.js:1287:20)
    at async scrapper (file:///app/index.js:11:3)
    at async file:///app/index.js:36:19
npm notice
npm notice New major version of npm available! 8.19.2 -> 10.5.0
npm notice Changelog: <https://github.com/npm/cli/releases/tag/v10.5.0>
npm notice Run `npm install -g npm@10.5.0` to update!
npm notice
```

### Error 4

When adding console logs in every step of the scrapper

```
file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/ExecutionContext.js:277
        throw new Error('Execution context was destroyed, most likely because of a navigation.');
              ^

Error: Execution context was destroyed, most likely because of a navigation.
    at rewriteError (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/ExecutionContext.js:277:15)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ExecutionContext.#evaluate (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/ExecutionContext.js:217:60)
    at async ExecutionContext.evaluate (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/ExecutionContext.js:114:16)
    at async IsolatedWorld.evaluate (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/cdp/IsolatedWorld.js:121:16)
    at async CdpFrame.evaluate (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/api/Frame.js:340:20)
    at async CdpFrame.content (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/api/Frame.js:508:20)
    at async CdpPage.content (file:///app/node_modules/puppeteer-core/lib/esm/puppeteer/api/Page.js:492:20)
    at async scrapper (file:///app/index.js:33:23)
    at async file:///app/index.js:14:19
npm notice
npm notice New major version of npm available! 8.19.2 -> 10.5.0
npm notice Changelog: <https://github.com/npm/cli/releases/tag/v10.5.0>
npm notice Run `npm install -g npm@10.5.0` to update!
npm notice
```
