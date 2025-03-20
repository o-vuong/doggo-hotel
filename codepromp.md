Project Path: doggo hotel

Source Tree:

```
doggo hotel
├── pnpm-lock.yaml
├── prd.md
├── Dockerfile
├── jest.config.js
├── prisma
│   ├── migrations
│   │   ├── migration_lock.toml
│   │   ├── 20250305135827_init
│   │   │   └── migration.sql
│   │   └── 20250203043223_
│   │       └── migration.sql
│   ├── schema.prisma
│   └── seed.ts
├── prompt.md
├── consolidated_prd.md
├── README.md
├── tailwind.config.ts
├── private.key
├── package-lock.json
├── package.json
├── commit src
│   ├── routers
│   └── server
│       └── trpc.ts
├── Plan.md
├── tsconfig.json
├── postcss.config.js
├── generate.log
└── src
    ├── routers
    │   ├── payment.ts
    │   ├── dashboard.ts
    │   ├── facility.ts
    │   ├── kennel.ts
    │   ├── payment.test.ts
    │   ├── pet.ts
    │   ├── kennel.test.ts
    │   ├── user.ts
    │   └── reservation.ts
    ├── server
    │   ├── middleware
    │   │   ├── errorHandler.ts
    │   │   └── rbac.ts
    │   ├── trpc.ts
    │   ├── trpc
    │   │   ├── context.ts
    │   │   └── router
    │   │       └── index.ts
    │   ├── logger.ts
    │   ├── api
    │   │   ├── routers
    │   │   │   ├── payment.ts
    │   │   │   ├── dashboard.ts
    │   │   │   ├── kennel.ts
    │   │   │   ├── pet.ts
    │   │   │   ├── user.ts
    │   │   │   ├── reservation.ts
    │   │   │   └── auth.ts
    │   │   ├── trpc.ts
    │   │   └── root.ts
    │   ├── db.ts
    │   └── auth.ts
    ├── utils
    │   ├── trpc.ts
    │   └── api.ts
    ├── styles
    │   └── globals.css
    ├── components
    │   ├── ui
    │   │   ├── card.tsx
    │   │   ├── button.tsx
    │   │   ├── Select.tsx
    │   │   ├── Textarea.tsx
    │   │   ├── Input.tsx
    │   │   └── Form.tsx
    │   ├── forms
    │   │   ├── PetForm.tsx
    │   │   ├── PaymentAuthorizationForm.tsx
    │   │   ├── OwnerAgreementForm.tsx
    │   │   ├── ReservationForm.tsx
    │   │   ├── VeterinaryReleaseForm.tsx
    │   │   ├── LiabilityWaiverForm.tsx
    │   │   └── KennelForm.tsx
    │   ├── layout
    │   │   └── DashboardLayout.tsx
    │   ├── dashboard
    │   │   ├── MainDashboard.tsx
    │   │   ├── ManagerDashboard.tsx
    │   │   ├── KennelOccupancyChart.tsx
    │   │   ├── StaffDashboard.tsx
    │   │   └── RevenueMetrics.tsx
    │   └── PetOwnerDashboard.tsx
    ├── lib
    │   └── utils.ts
    ├── index.ts
    └── pages
        ├── index.tsx
        ├── auth
        │   ├── register.tsx
        │   └── signin.tsx
        ├── reservations
        │   └── index.tsx
        ├── pets
        │   ├── index.tsx
        │   ├── new.tsx
        │   └── [id].tsx
        ├── dashboard
        │   └── index.tsx
        ├── api
        │   ├── reservations.ts
        │   ├── auth
        │   │   └── [...nextauth].ts
        │   ├── trpc
        │   └── webhooks
        │       └── stripe.ts
        ├── kennels
        │   ├── index.tsx
        │   ├── new.tsx
        │   └── [id].tsx
        └── _app.tsx

```

`/Users/oscarvuong/doggo hotel/pnpm-lock.yaml`:

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@hookform/resolvers':
        specifier: ^3.10.0
        version: 3.10.0(react-hook-form@7.54.2(react@18.2.0))
      '@next-auth/prisma-adapter':
        specifier: ^1.0.7
        version: 1.0.7(@prisma/client@6.4.1(prisma@6.4.1(typescript@5.8.2))(typescript@5.8.2))(next-auth@4.24.11(next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react-dom@18.2.0(react@18.2.0))(react@18.2.0))
      '@prisma/client':
        specifier: ^6.4.1
        version: 6.4.1(prisma@6.4.1(typescript@5.8.2))(typescript@5.8.2)
      '@radix-ui/react-avatar':
        specifier: ^1.1.3
        version: 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-dialog':
        specifier: ^1.1.6
        version: 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-dropdown-menu':
        specifier: ^2.1.6
        version: 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-icons':
        specifier: ^1.3.2
        version: 1.3.2(react@18.2.0)
      '@radix-ui/react-label':
        specifier: ^2.1.2
        version: 2.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-separator':
        specifier: ^1.1.2
        version: 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot':
        specifier: ^1.1.2
        version: 1.1.2(@types/react@18.3.18)(react@18.2.0)
      '@stripe/react-stripe-js':
        specifier: ^3.3.0
        version: 3.3.0(@stripe/stripe-js@5.8.0)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@stripe/stripe-js':
        specifier: ^5.8.0
        version: 5.8.0
      '@tanstack/react-query':
        specifier: ^4.36.1
        version: 4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@trpc/client':
        specifier: ^10.45.2
        version: 10.45.2(@trpc/server@10.45.2)
      '@trpc/next':
        specifier: ^10.45.2
        version: 10.45.2(@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/react-query@10.45.2(@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/server@10.45.2)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/server@10.45.2)(next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@trpc/react':
        specifier: ^9.27.4
        version: 9.27.4(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/server@10.45.2)(react-dom@18.2.0(react@18.2.0))(react-query@3.39.3(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react@18.2.0)
      '@trpc/react-query':
        specifier: ^10.45.2
        version: 10.45.2(@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/server@10.45.2)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@trpc/server':
        specifier: ^10.45.2
        version: 10.45.2
      '@types/react-datepicker':
        specifier: ^7.0.0
        version: 7.0.0(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      bcrypt:
        specifier: ^5.1.1
        version: 5.1.1
      class-variance-authority:
        specifier: ^0.7.1
        version: 0.7.1
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      date-fns:
        specifier: ^4.1.0
        version: 4.1.0
      express:
        specifier: ^4.21.2
        version: 4.21.2
      lucide-react:
        specifier: ^0.469.0
        version: 0.469.0(react@18.2.0)
      next:
        specifier: ^15.2.1
        version: 15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      next-auth:
        specifier: ^4.24.11
        version: 4.24.11(next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      radix-ui:
        specifier: ^1.1.3
        version: 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react:
        specifier: 18.2.0
        version: 18.2.0
      react-datepicker:
        specifier: ^7.6.0
        version: 7.6.0(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react-dom:
        specifier: 18.2.0
        version: 18.2.0(react@18.2.0)
      react-hook-form:
        specifier: ^7.54.2
        version: 7.54.2(react@18.2.0)
      react-hot-toast:
        specifier: ^2.5.2
        version: 2.5.2(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react-query:
        specifier: ^3.39.3
        version: 3.39.3(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      recharts:
        specifier: ^2.15.1
        version: 2.15.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      stripe:
        specifier: ^14.25.0
        version: 14.25.0
      superjson:
        specifier: ^2.2.2
        version: 2.2.2
      tailwind-merge:
        specifier: ^2.6.0
        version: 2.6.0
      trpc:
        specifier: ^0.11.3
        version: 0.11.3
      zod:
        specifier: ^3.24.2
        version: 3.24.2
    devDependencies:
      '@types/bcrypt':
        specifier: ^5.0.2
        version: 5.0.2
      '@types/bcryptjs':
        specifier: ^2.4.6
        version: 2.4.6
      '@types/eslint':
        specifier: ^8.56.12
        version: 8.56.12
      '@types/jest':
        specifier: ^29.5.14
        version: 29.5.14
      '@types/node':
        specifier: ^22.13.9
        version: 22.13.9
      '@types/react':
        specifier: ^18.3.18
        version: 18.3.18
      '@types/react-dom':
        specifier: ^18.3.5
        version: 18.3.5(@types/react@18.3.18)
      '@typescript-eslint/eslint-plugin':
        specifier: ^6.21.0
        version: 6.21.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint@8.57.1)(typescript@5.8.2)
      '@typescript-eslint/parser':
        specifier: ^6.21.0
        version: 6.21.0(eslint@8.57.1)(typescript@5.8.2)
      autoprefixer:
        specifier: ^10.4.20
        version: 10.4.20(postcss@8.5.3)
      bcryptjs:
        specifier: ^2.4.3
        version: 2.4.3
      eslint:
        specifier: ^8.57.1
        version: 8.57.1
      eslint-config-next:
        specifier: ^14.2.24
        version: 14.2.24(eslint@8.57.1)(typescript@5.8.2)
      jest:
        specifier: ^29.7.0
        version: 29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      postcss:
        specifier: ^8.5.3
        version: 8.5.3
      prettier:
        specifier: ^3.5.3
        version: 3.5.3
      prettier-plugin-tailwindcss:
        specifier: ^0.5.14
        version: 0.5.14(prettier@3.5.3)
      prisma:
        specifier: ^6.4.1
        version: 6.4.1(typescript@5.8.2)
      tailwindcss:
        specifier: ^3.4.17
        version: 3.4.17(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      ts-jest:
        specifier: ^29.2.6
        version: 29.2.6(@babel/core@7.26.9)(@jest/transform@29.7.0)(@jest/types@29.6.3)(babel-jest@29.7.0(@babel/core@7.26.9))(esbuild@0.25.0)(jest@29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)))(typescript@5.8.2)
      ts-node:
        specifier: ^10.9.2
        version: 10.9.2(@types/node@22.13.9)(typescript@5.8.2)
      typescript:
        specifier: ^5.8.2
        version: 5.8.2

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@ampproject/remapping@2.3.0':
    resolution: {integrity: sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==}
    engines: {node: '>=6.0.0'}

  '@babel/code-frame@7.26.2':
    resolution: {integrity: sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.26.8':
    resolution: {integrity: sha512-oH5UPLMWR3L2wEFLnFJ1TZXqHufiTKAiLfqw5zkhS4dKXLJ10yVztfil/twG8EDTA4F/tvVNw9nOl4ZMslB8rQ==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.26.9':
    resolution: {integrity: sha512-lWBYIrF7qK5+GjY5Uy+/hEgp8OJWOD/rpy74GplYRhEauvbHDeFB8t5hPOZxCZ0Oxf4Cc36tK51/l3ymJysrKw==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.26.9':
    resolution: {integrity: sha512-kEWdzjOAUMW4hAyrzJ0ZaTOu9OmpyDIQicIh0zg0EEcEkYXZb2TjtBhnHi2ViX7PKwZqF4xwqfAm299/QMP3lg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.26.5':
    resolution: {integrity: sha512-IXuyn5EkouFJscIDuFF5EsiSolseme1s0CZB+QxVugqJLYmKdxI1VfIBOst0SUu4rnk2Z7kqTwmoO1lp3HIfnA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.25.9':
    resolution: {integrity: sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.26.0':
    resolution: {integrity: sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-plugin-utils@7.26.5':
    resolution: {integrity: sha512-RS+jZcRdZdRFzMyr+wcsaqOmld1/EqTghfaBGQQd/WnRdzdlvSZ//kF7U8VQTxf1ynZ4cjUcYgjVGx13ewNPMg==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.25.9':
    resolution: {integrity: sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.25.9':
    resolution: {integrity: sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.25.9':
    resolution: {integrity: sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.26.9':
    resolution: {integrity: sha512-Mz/4+y8udxBKdmzt/UjPACs4G3j5SshJJEFFKxlCGPydG4JAHXxjWjAwjd09tf6oINvl1VfMJo+nB7H2YKQ0dA==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.26.9':
    resolution: {integrity: sha512-81NWa1njQblgZbQHxWHpxxCzNsa3ZwvFqpUg7P+NNUU6f3UU2jBEg4OlF/J6rl8+PQGh1q6/zWScd001YwcA5A==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-syntax-async-generators@7.8.4':
    resolution: {integrity: sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-bigint@7.8.3':
    resolution: {integrity: sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-class-properties@7.12.13':
    resolution: {integrity: sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-class-static-block@7.14.5':
    resolution: {integrity: sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-attributes@7.26.0':
    resolution: {integrity: sha512-e2dttdsJ1ZTpi3B9UYGLw41hifAubg19AtCu/2I/F1QNVclOBr1dYpTdmdyZ84Xiz43BS/tCUkMAZNLv12Pi+A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-meta@7.10.4':
    resolution: {integrity: sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-json-strings@7.8.3':
    resolution: {integrity: sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-jsx@7.25.9':
    resolution: {integrity: sha512-ld6oezHQMZsZfp6pWtbjaNDF2tiiCYYDqQszHt5VV437lewP9aSi2Of99CK0D0XB21k7FLgnLcmQKyKzynfeAA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-logical-assignment-operators@7.10.4':
    resolution: {integrity: sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-nullish-coalescing-operator@7.8.3':
    resolution: {integrity: sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-numeric-separator@7.10.4':
    resolution: {integrity: sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-object-rest-spread@7.8.3':
    resolution: {integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-optional-catch-binding@7.8.3':
    resolution: {integrity: sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-optional-chaining@7.8.3':
    resolution: {integrity: sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-private-property-in-object@7.14.5':
    resolution: {integrity: sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-top-level-await@7.14.5':
    resolution: {integrity: sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-typescript@7.25.9':
    resolution: {integrity: sha512-hjMgRy5hb8uJJjUcdWunWVcoi9bGpJp8p5Ol1229PoN6aytsLwNMgmdftO23wnCLMfVmTwZDWMPNq/D1SY60JQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/runtime@7.26.9':
    resolution: {integrity: sha512-aA63XwOkcl4xxQa3HjPMqOP6LiK0ZDv3mUPYEFXkpHbaFjtGggE1A61FjFzJnB+p7/oy2gA8E+rcBNl/zC1tMg==}
    engines: {node: '>=6.9.0'}

  '@babel/template@7.26.9':
    resolution: {integrity: sha512-qyRplbeIpNZhmzOysF/wFMuP9sctmh2cFzRAZOn1YapxBsE1i9bJIY586R/WBLfLcmcBlM8ROBiQURnnNy+zfA==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.26.9':
    resolution: {integrity: sha512-ZYW7L+pL8ahU5fXmNbPF+iZFHCv5scFak7MZ9bwaRPLUhHh7QQEMjZUg0HevihoqCM5iSYHN61EyCoZvqC+bxg==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.26.9':
    resolution: {integrity: sha512-Y3IR1cRnOxOCDvMmNiym7XpXQ93iGDDPHx+Zj+NM+rg0fBaShfQLkg+hKPaZCEvg5N/LeCo4+Rj/i3FuJsIQaw==}
    engines: {node: '>=6.9.0'}

  '@bcoe/v8-coverage@0.2.3':
    resolution: {integrity: sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==}

  '@cspotcode/source-map-support@0.8.1':
    resolution: {integrity: sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==}
    engines: {node: '>=12'}

  '@emnapi/runtime@1.3.1':
    resolution: {integrity: sha512-kEBmG8KyqtxJZv+ygbEim+KCGtIq1fC22Ms3S4ziXmYKm8uyoLX0MHONVKwp+9opg390VaKRNt4a7A9NwmpNhw==}

  '@esbuild/aix-ppc64@0.25.0':
    resolution: {integrity: sha512-O7vun9Sf8DFjH2UtqK8Ku3LkquL9SZL8OLY1T5NZkA34+wG3OQF7cl4Ql8vdNzM6fzBbYfLaiRLIOZ+2FOCgBQ==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.25.0':
    resolution: {integrity: sha512-grvv8WncGjDSyUBjN9yHXNt+cq0snxXbDxy5pJtzMKGmmpPxeAmAhWxXI+01lU5rwZomDgD3kJwulEnhTRUd6g==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.25.0':
    resolution: {integrity: sha512-PTyWCYYiU0+1eJKmw21lWtC+d08JDZPQ5g+kFyxP0V+es6VPPSUhM6zk8iImp2jbV6GwjX4pap0JFbUQN65X1g==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.25.0':
    resolution: {integrity: sha512-m/ix7SfKG5buCnxasr52+LI78SQ+wgdENi9CqyCXwjVR2X4Jkz+BpC3le3AoBPYTC9NHklwngVXvbJ9/Akhrfg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.25.0':
    resolution: {integrity: sha512-mVwdUb5SRkPayVadIOI78K7aAnPamoeFR2bT5nszFUZ9P8UpK4ratOdYbZZXYSqPKMHfS1wdHCJk1P1EZpRdvw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.25.0':
    resolution: {integrity: sha512-DgDaYsPWFTS4S3nWpFcMn/33ZZwAAeAFKNHNa1QN0rI4pUjgqf0f7ONmXf6d22tqTY+H9FNdgeaAa+YIFUn2Rg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.25.0':
    resolution: {integrity: sha512-VN4ocxy6dxefN1MepBx/iD1dH5K8qNtNe227I0mnTRjry8tj5MRk4zprLEdG8WPyAPb93/e4pSgi1SoHdgOa4w==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.25.0':
    resolution: {integrity: sha512-mrSgt7lCh07FY+hDD1TxiTyIHyttn6vnjesnPoVDNmDfOmggTLXRv8Id5fNZey1gl/V2dyVK1VXXqVsQIiAk+A==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.25.0':
    resolution: {integrity: sha512-9QAQjTWNDM/Vk2bgBl17yWuZxZNQIF0OUUuPZRKoDtqF2k4EtYbpyiG5/Dk7nqeK6kIJWPYldkOcBqjXjrUlmg==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.25.0':
    resolution: {integrity: sha512-vkB3IYj2IDo3g9xX7HqhPYxVkNQe8qTK55fraQyTzTX/fxaDtXiEnavv9geOsonh2Fd2RMB+i5cbhu2zMNWJwg==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.25.0':
    resolution: {integrity: sha512-43ET5bHbphBegyeqLb7I1eYn2P/JYGNmzzdidq/w0T8E2SsYL1U6un2NFROFRg1JZLTzdCoRomg8Rvf9M6W6Gg==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.25.0':
    resolution: {integrity: sha512-fC95c/xyNFueMhClxJmeRIj2yrSMdDfmqJnyOY4ZqsALkDrrKJfIg5NTMSzVBr5YW1jf+l7/cndBfP3MSDpoHw==}
    engines: {node: '>=18'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.25.0':
    resolution: {integrity: sha512-nkAMFju7KDW73T1DdH7glcyIptm95a7Le8irTQNO/qtkoyypZAnjchQgooFUDQhNAy4iu08N79W4T4pMBwhPwQ==}
    engines: {node: '>=18'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.25.0':
    resolution: {integrity: sha512-NhyOejdhRGS8Iwv+KKR2zTq2PpysF9XqY+Zk77vQHqNbo/PwZCzB5/h7VGuREZm1fixhs4Q/qWRSi5zmAiO4Fw==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.25.0':
    resolution: {integrity: sha512-5S/rbP5OY+GHLC5qXp1y/Mx//e92L1YDqkiBbO9TQOvuFXM+iDqUNG5XopAnXoRH3FjIUDkeGcY1cgNvnXp/kA==}
    engines: {node: '>=18'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.25.0':
    resolution: {integrity: sha512-XM2BFsEBz0Fw37V0zU4CXfcfuACMrppsMFKdYY2WuTS3yi8O1nFOhil/xhKTmE1nPmVyvQJjJivgDT+xh8pXJA==}
    engines: {node: '>=18'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.25.0':
    resolution: {integrity: sha512-9yl91rHw/cpwMCNytUDxwj2XjFpxML0y9HAOH9pNVQDpQrBxHy01Dx+vaMu0N1CKa/RzBD2hB4u//nfc+Sd3Cw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-arm64@0.25.0':
    resolution: {integrity: sha512-RuG4PSMPFfrkH6UwCAqBzauBWTygTvb1nxWasEJooGSJ/NwRw7b2HOwyRTQIU97Hq37l3npXoZGYMy3b3xYvPw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.25.0':
    resolution: {integrity: sha512-jl+qisSB5jk01N5f7sPCsBENCOlPiS/xptD5yxOx2oqQfyourJwIKLRA2yqWdifj3owQZCL2sn6o08dBzZGQzA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-arm64@0.25.0':
    resolution: {integrity: sha512-21sUNbq2r84YE+SJDfaQRvdgznTD8Xc0oc3p3iW/a1EVWeNj/SdUCbm5U0itZPQYRuRTW20fPMWMpcrciH2EJw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.25.0':
    resolution: {integrity: sha512-2gwwriSMPcCFRlPlKx3zLQhfN/2WjJ2NSlg5TKLQOJdV0mSxIcYNTMhk3H3ulL/cak+Xj0lY1Ym9ysDV1igceg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/sunos-x64@0.25.0':
    resolution: {integrity: sha512-bxI7ThgLzPrPz484/S9jLlvUAHYMzy6I0XiU1ZMeAEOBcS0VePBFxh1JjTQt3Xiat5b6Oh4x7UC7IwKQKIJRIg==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.25.0':
    resolution: {integrity: sha512-ZUAc2YK6JW89xTbXvftxdnYy3m4iHIkDtK3CLce8wg8M2L+YZhIvO1DKpxrd0Yr59AeNNkTiic9YLf6FTtXWMw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.25.0':
    resolution: {integrity: sha512-eSNxISBu8XweVEWG31/JzjkIGbGIJN/TrRoiSVZwZ6pkC6VX4Im/WV2cz559/TXLcYbcrDN8JtKgd9DJVIo8GA==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.25.0':
    resolution: {integrity: sha512-ZENoHJBxA20C2zFzh6AI4fT6RraMzjYw4xKWemRTRmRVtN9c5DcH9r/f2ihEkMjOW5eGgrwCslG/+Y/3bL+DHQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [win32]

  '@eslint-community/eslint-utils@4.4.1':
    resolution: {integrity: sha512-s3O3waFUrMV8P/XaF/+ZTp1X9XBZW1a4B97ZnjQF2KYWaFD2A8KyFBsrsfSjEmjn3RGWAIuvlneuZm3CUK3jbA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.12.1':
    resolution: {integrity: sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/eslintrc@2.1.4':
    resolution: {integrity: sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@eslint/js@8.57.1':
    resolution: {integrity: sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@floating-ui/core@1.6.9':
    resolution: {integrity: sha512-uMXCuQ3BItDUbAMhIXw7UPXRfAlOAvZzdK9BWpE60MCn+Svt3aLn9jsPTi/WNGlRUu2uI0v5S7JiIUsbsvh3fw==}

  '@floating-ui/dom@1.6.13':
    resolution: {integrity: sha512-umqzocjDgNRGTuO7Q8CU32dkHkECqI8ZdMZ5Swb6QAM0t5rnlrN3lGo1hdpscRd3WS8T6DKYK4ephgIH9iRh3w==}

  '@floating-ui/react-dom@2.1.2':
    resolution: {integrity: sha512-06okr5cgPzMNBy+Ycse2A6udMi4bqwW/zgBF/rwjcNqWkyr82Mcg8b0vjX8OJpZFy/FKjJmw6wV7t44kK6kW7A==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/react@0.27.5':
    resolution: {integrity: sha512-BX3jKxo39Ba05pflcQmqPPwc0qdNsdNi/eweAFtoIdrJWNen2sVEWMEac3i6jU55Qfx+lOcdMNKYn2CtWmlnOQ==}
    peerDependencies:
      react: '>=17.0.0'
      react-dom: '>=17.0.0'

  '@floating-ui/utils@0.2.9':
    resolution: {integrity: sha512-MDWhGtE+eHw5JW7lq4qhc5yRLS11ERl1c7Z6Xd0a58DozHES6EnNNwUWbMiG4J9Cgj053Bhk8zvlhFYKVhULwg==}

  '@hookform/resolvers@3.10.0':
    resolution: {integrity: sha512-79Dv+3mDF7i+2ajj7SkypSKHhl1cbln1OGavqrsF7p6mbUv11xpqpacPsGDCTRvCSjEEIez2ef1NveSVL3b0Ag==}
    peerDependencies:
      react-hook-form: ^7.0.0

  '@humanwhocodes/config-array@0.13.0':
    resolution: {integrity: sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==}
    engines: {node: '>=10.10.0'}
    deprecated: Use @eslint/config-array instead

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/object-schema@2.0.3':
    resolution: {integrity: sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==}
    deprecated: Use @eslint/object-schema instead

  '@img/sharp-darwin-arm64@0.33.5':
    resolution: {integrity: sha512-UT4p+iz/2H4twwAoLCqfA9UH5pI6DggwKEGuaPy7nCVQ8ZsiY5PIcrRvD1DzuY3qYL07NtIQcWnBSY/heikIFQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.33.5':
    resolution: {integrity: sha512-fyHac4jIc1ANYGRDxtiqelIbdWkIuQaI84Mv45KvGRRxSAa7o7d1ZKAOBaYbnepLC1WqxfpimdeWfvqqSGwR2Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-darwin-arm64@1.0.4':
    resolution: {integrity: sha512-XblONe153h0O2zuFfTAbQYAX2JhYmDHeWikp1LM9Hul9gVPjFY427k6dFEcOL72O01QxQsWi761svJ/ev9xEDg==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.0.4':
    resolution: {integrity: sha512-xnGR8YuZYfJGmWPvmlunFaWJsb9T/AO2ykoP3Fz/0X5XV2aoYBPkX6xqCQvUTKKiLddarLaxpzNe+b1hjeWHAQ==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.0.4':
    resolution: {integrity: sha512-9B+taZ8DlyyqzZQnoeIvDVR/2F4EbMepXMc/NdVbkzsJbzkUjhXv/70GQJ7tdLA4YJgNP25zukcxpX2/SueNrA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linux-arm@1.0.5':
    resolution: {integrity: sha512-gvcC4ACAOPRNATg/ov8/MnbxFDJqf/pDePbBnuBDcjsI8PssmjoKMAz4LtLaVi+OnSb5FK/yIOamqDwGmXW32g==}
    cpu: [arm]
    os: [linux]

  '@img/sharp-libvips-linux-s390x@1.0.4':
    resolution: {integrity: sha512-u7Wz6ntiSSgGSGcjZ55im6uvTrOxSIS8/dgoVMoiGE9I6JAfU50yH5BoDlYA1tcuGS7g/QNtetJnxA6QEsCVTA==}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-libvips-linux-x64@1.0.4':
    resolution: {integrity: sha512-MmWmQ3iPFZr0Iev+BAgVMb3ZyC4KeFc3jFxnNbEPas60e1cIfevbtuyf9nDGIzOaW9PdnDciJm+wFFaTlj5xYw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-arm64@1.0.4':
    resolution: {integrity: sha512-9Ti+BbTYDcsbp4wfYib8Ctm1ilkugkA/uscUn6UXK1ldpC1JjiXbLfFZtRlBhjPZ5o1NCLiDbg8fhUPKStHoTA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-x64@1.0.4':
    resolution: {integrity: sha512-viYN1KX9m+/hGkJtvYYp+CCLgnJXwiQB39damAO7WMdKWlIhmYTfHjwSbQeUK/20vY154mwezd9HflVFM1wVSw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linux-arm64@0.33.5':
    resolution: {integrity: sha512-JMVv+AMRyGOHtO1RFBiJy/MBsgz0x4AWrT6QoEVVTyh1E39TrCUpTRI7mx9VksGX4awWASxqCYLCV4wBZHAYxA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linux-arm@0.33.5':
    resolution: {integrity: sha512-JTS1eldqZbJxjvKaAkxhZmBqPRGmxgu+qFKSInv8moZ2AmT5Yib3EQ1c6gp493HvrvV8QgdOXdyaIBrhvFhBMQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm]
    os: [linux]

  '@img/sharp-linux-s390x@0.33.5':
    resolution: {integrity: sha512-y/5PCd+mP4CA/sPDKl2961b+C9d+vPAveS33s6Z3zfASk2j5upL6fXVPZi7ztePZ5CuH+1kW8JtvxgbuXHRa4Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-linux-x64@0.33.5':
    resolution: {integrity: sha512-opC+Ok5pRNAzuvq1AG0ar+1owsu842/Ab+4qvU879ippJBHvyY5n2mxF1izXqkPYlGuP/M556uh53jRLJmzTWA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linuxmusl-arm64@0.33.5':
    resolution: {integrity: sha512-XrHMZwGQGvJg2V/oRSUfSAfjfPxO+4DkiRh6p2AFjLQztWUuY/o8Mq0eMQVIY7HJ1CDQUJlxGGZRw1a5bqmd1g==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linuxmusl-x64@0.33.5':
    resolution: {integrity: sha512-WT+d/cgqKkkKySYmqoZ8y3pxx7lx9vVejxW/W4DOFMYVSkErR+w7mf2u8m/y4+xHe7yY9DAXQMWQhpnMuFfScw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-wasm32@0.33.5':
    resolution: {integrity: sha512-ykUW4LVGaMcU9lu9thv85CbRMAwfeadCJHRsg2GmeRa/cJxsVY9Rbd57JcMxBkKHag5U/x7TSBpScF4U8ElVzg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [wasm32]

  '@img/sharp-win32-ia32@0.33.5':
    resolution: {integrity: sha512-T36PblLaTwuVJ/zw/LaH0PdZkRz5rd3SmMHX8GSmR7vtNSP5Z6bQkExdSK7xGWyxLw4sUknBuugTelgw2faBbQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.33.5':
    resolution: {integrity: sha512-MpY/o8/8kj+EcnxwvrP4aTJSWw/aZ7JIGR4aBeZkZw5B7/Jn+tY9/VNwtcoGmdT7GfggGIU4kygOMSbYnOrAbg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [win32]

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@istanbuljs/load-nyc-config@1.1.0':
    resolution: {integrity: sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==}
    engines: {node: '>=8'}

  '@istanbuljs/schema@0.1.3':
    resolution: {integrity: sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==}
    engines: {node: '>=8'}

  '@jest/console@29.7.0':
    resolution: {integrity: sha512-5Ni4CU7XHQi32IJ398EEP4RrB8eV09sXP2ROqD4bksHrnTree52PsxvX8tpL8LvTZ3pFzXyPbNQReSN41CAhOg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/core@29.7.0':
    resolution: {integrity: sha512-n7aeXWKMnGtDA48y8TLWJPJmLmmZ642Ceo78cYWEpiD7FzDgmNDV/GCVRorPABdXLJZ/9wzzgZAlHjXjxDHGsg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  '@jest/environment@29.7.0':
    resolution: {integrity: sha512-aQIfHDq33ExsN4jP1NWGXhxgQ/wixs60gDiKO+XVMd8Mn0NWPWgc34ZQDTb2jKaUWQ7MuwoitXAsN2XVXNMpAw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/expect-utils@29.7.0':
    resolution: {integrity: sha512-GlsNBWiFQFCVi9QVSx7f5AgMeLxe9YCCs5PuP2O2LdjDAA8Jh9eX7lA1Jq/xdXw3Wb3hyvlFNfZIfcRetSzYcA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/expect@29.7.0':
    resolution: {integrity: sha512-8uMeAMycttpva3P1lBHB8VciS9V0XAr3GymPpipdyQXbBcuhkLQOSe8E/p92RyAdToS6ZD1tFkX+CkhoECE0dQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/fake-timers@29.7.0':
    resolution: {integrity: sha512-q4DH1Ha4TTFPdxLsqDXK1d3+ioSL7yL5oCMJZgDYm6i+6CygW5E5xVr/D1HdsGxjt1ZWSfUAs9OxSB/BNelWrQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/globals@29.7.0':
    resolution: {integrity: sha512-mpiz3dutLbkW2MNFubUGUEVLkTGiqW6yLVTA+JbP6fI6J5iL9Y0Nlg8k95pcF8ctKwCS7WVxteBs29hhfAotzQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/reporters@29.7.0':
    resolution: {integrity: sha512-DApq0KJbJOEzAFYjHADNNxAE3KbhxQB1y5Kplb5Waqw6zVbuWatSnMjE5gs8FUgEPmNsnZA3NCWl9NG0ia04Pg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  '@jest/schemas@29.6.3':
    resolution: {integrity: sha512-mo5j5X+jIZmJQveBKeS/clAueipV7KgiX1vMgCxam1RNYiqE1w62n0/tJJnHtjW8ZHcQco5gY85jA3mi0L+nSA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/source-map@29.6.3':
    resolution: {integrity: sha512-MHjT95QuipcPrpLM+8JMSzFx6eHp5Bm+4XeFDJlwsvVBjmKNiIAvasGK2fxz2WbGRlnvqehFbh07MMa7n3YJnw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/test-result@29.7.0':
    resolution: {integrity: sha512-Fdx+tv6x1zlkJPcWXmMDAG2HBnaR9XPSd5aDWQVsfrZmLVT3lU1cwyxLgRmXR9yrq4NBoEm9BMsfgFzTQAbJYA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/test-sequencer@29.7.0':
    resolution: {integrity: sha512-GQwJ5WZVrKnOJuiYiAF52UNUJXgTZx1NHjFSEB0qEMmSZKAkdMoIzw/Cj6x6NF4AvV23AUqDpFzQkN/eYCYTxw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/transform@29.7.0':
    resolution: {integrity: sha512-ok/BTPFzFKVMwO5eOHRrvnBVHdRy9IrsrW1GpMaQ9MCnilNLXQKmAX8s1YXDFaai9xJpac2ySzV0YeRRECr2Vw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/types@29.6.3':
    resolution: {integrity: sha512-u3UPsIilWKOM3F9CXtrG8LEJmNxwoCQC/XVj4IKYXvvpx7QIi/Kg1LI5uDmDpKlac62NUtX7eLjRh+jVZcLOzw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jridgewell/gen-mapping@0.3.8':
    resolution: {integrity: sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.0':
    resolution: {integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@jridgewell/trace-mapping@0.3.9':
    resolution: {integrity: sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==}

  '@mapbox/node-pre-gyp@1.0.11':
    resolution: {integrity: sha512-Yhlar6v9WQgUp/He7BdgzOz8lqMQ8sU+jkCq7Wx8Myc5YFJLbEe7lgui/V7G1qB1DJykHSGwreceSaD60Y0PUQ==}
    hasBin: true

  '@next-auth/prisma-adapter@1.0.7':
    resolution: {integrity: sha512-Cdko4KfcmKjsyHFrWwZ//lfLUbcLqlyFqjd/nYE2m3aZ7tjMNUjpks47iw7NTCnXf+5UWz5Ypyt1dSs1EP5QJw==}
    peerDependencies:
      '@prisma/client': '>=2.26.0 || >=3'
      next-auth: ^4

  '@next/env@15.2.1':
    resolution: {integrity: sha512-JmY0qvnPuS2NCWOz2bbby3Pe0VzdAQ7XpEB6uLIHmtXNfAsAO0KLQLkuAoc42Bxbo3/jMC3dcn9cdf+piCcG2Q==}

  '@next/eslint-plugin-next@14.2.24':
    resolution: {integrity: sha512-FDL3qs+5DML0AJz56DCVr+KnFYivxeAX73En8QbPw9GjJZ6zbfvqDy+HrarHFzbsIASn7y8y5ySJ/lllSruNVQ==}

  '@next/swc-darwin-arm64@15.2.1':
    resolution: {integrity: sha512-aWXT+5KEREoy3K5AKtiKwioeblmOvFFjd+F3dVleLvvLiQ/mD//jOOuUcx5hzcO9ISSw4lrqtUPntTpK32uXXQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@15.2.1':
    resolution: {integrity: sha512-E/w8ervu4fcG5SkLhvn1NE/2POuDCDEy5gFbfhmnYXkyONZR68qbUlJlZwuN82o7BrBVAw+tkR8nTIjGiMW1jQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@15.2.1':
    resolution: {integrity: sha512-gXDX5lIboebbjhiMT6kFgu4svQyjoSed6dHyjx5uZsjlvTwOAnZpn13w9XDaIMFFHw7K8CpBK7HfDKw0VZvUXQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-arm64-musl@15.2.1':
    resolution: {integrity: sha512-3v0pF/adKZkBWfUffmB/ROa+QcNTrnmYG4/SS+r52HPwAK479XcWoES2I+7F7lcbqc7mTeVXrIvb4h6rR/iDKg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-x64-gnu@15.2.1':
    resolution: {integrity: sha512-RbsVq2iB6KFJRZ2cHrU67jLVLKeuOIhnQB05ygu5fCNgg8oTewxweJE8XlLV+Ii6Y6u4EHwETdUiRNXIAfpBww==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-linux-x64-musl@15.2.1':
    resolution: {integrity: sha512-QHsMLAyAIu6/fWjHmkN/F78EFPKmhQlyX5C8pRIS2RwVA7z+t9cTb0IaYWC3EHLOTjsU7MNQW+n2xGXr11QPpg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-win32-arm64-msvc@15.2.1':
    resolution: {integrity: sha512-Gk42XZXo1cE89i3hPLa/9KZ8OuupTjkDmhLaMKFohjf9brOeZVEa3BQy1J9s9TWUqPhgAEbwv6B2+ciGfe54Vw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-x64-msvc@15.2.1':
    resolution: {integrity: sha512-YjqXCl8QGhVlMR8uBftWk0iTmvtntr41PhG1kvzGp0sUP/5ehTM+cwx25hKE54J0CRnHYjSGjSH3gkHEaHIN9g==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@nolyfill/is-core-module@1.0.39':
    resolution: {integrity: sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==}
    engines: {node: '>=12.4.0'}

  '@panva/hkdf@1.2.1':
    resolution: {integrity: sha512-6oclG6Y3PiDFcoyk8srjLfVKyMfVCKJ27JwNPViuXziFpmdz+MZnZN/aKY0JGXgYuO/VghU0jcOAZgWXZ1Dmrw==}

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@prisma/client@6.4.1':
    resolution: {integrity: sha512-A7Mwx44+GVZVexT5e2GF/WcKkEkNNKbgr059xpr5mn+oUm2ZW1svhe+0TRNBwCdzhfIZ+q23jEgsNPvKD9u+6g==}
    engines: {node: '>=18.18'}
    peerDependencies:
      prisma: '*'
      typescript: '>=5.1.0'
    peerDependenciesMeta:
      prisma:
        optional: true
      typescript:
        optional: true

  '@prisma/debug@6.4.1':
    resolution: {integrity: sha512-Q9xk6yjEGIThjSD8zZegxd5tBRNHYd13GOIG0nLsanbTXATiPXCLyvlYEfvbR2ft6dlRsziQXfQGxAgv7zcMUA==}

  '@prisma/engines-version@6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d':
    resolution: {integrity: sha512-Xq54qw55vaCGrGgIJqyDwOq0TtjZPJEWsbQAHugk99hpDf2jcEeQhUcF+yzEsSqegBaDNLA4IC8Nn34sXmkiTQ==}

  '@prisma/engines@6.4.1':
    resolution: {integrity: sha512-KldENzMHtKYwsOSLThghOIdXOBEsfDuGSrxAZjMnimBiDKd3AE4JQ+Kv+gBD/x77WoV9xIPf25GXMWffXZ17BA==}

  '@prisma/fetch-engine@6.4.1':
    resolution: {integrity: sha512-uZ5hVeTmDspx7KcaRCNoXmcReOD+84nwlO2oFvQPRQh9xiFYnnUKDz7l9bLxp8t4+25CsaNlgrgilXKSQwrIGQ==}

  '@prisma/get-platform@6.4.1':
    resolution: {integrity: sha512-gXqZaDI5scDkBF8oza7fOD3Q3QMD0e0rBynlzDDZdTWbWmzjuW58PRZtj+jkvKje2+ZigCWkH8SsWZAsH6q1Yw==}

  '@radix-ui/number@1.1.0':
    resolution: {integrity: sha512-V3gRzhVNU1ldS5XhAPTom1fOIo4ccrjjJgmE+LI2h/WaFpHmx0MQApT+KZHnx8abG6Avtfcz4WoEciMnpFT3HQ==}

  '@radix-ui/primitive@1.1.1':
    resolution: {integrity: sha512-SJ31y+Q/zAyShtXJc8x83i9TYdbAfHZ++tUZnvjJJqFjzsdUnKsxPL6IEtBlxKkU7yzer//GQtZSV4GbldL3YA==}

  '@radix-ui/react-accessible-icon@1.1.2':
    resolution: {integrity: sha512-+rnMO0SEfzkcHr93RshkQVpOA26MtGOv4pcS9QUnLg4F8+GDmCJ8c2FEPhPz5e7arf31EzbTqJxFbzg3qen14g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-accordion@1.2.3':
    resolution: {integrity: sha512-RIQ15mrcvqIkDARJeERSuXSry2N8uYnxkdDetpfmalT/+0ntOXLkFOsh9iwlAsCv+qcmhZjbdJogIm6WBa6c4A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-alert-dialog@1.1.6':
    resolution: {integrity: sha512-p4XnPqgej8sZAAReCAKgz1REYZEBLR8hU9Pg27wFnCWIMc8g1ccCs0FjBcy05V15VTu8pAePw/VDYeOm/uZ6yQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-arrow@1.1.2':
    resolution: {integrity: sha512-G+KcpzXHq24iH0uGG/pF8LyzpFJYGD4RfLjCIBfGdSLXvjLHST31RUiRVrupIBMvIppMgSzQ6l66iAxl03tdlg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-aspect-ratio@1.1.2':
    resolution: {integrity: sha512-TaJxYoCpxJ7vfEkv2PTNox/6zzmpKXT6ewvCuf2tTOIVN45/Jahhlld29Yw4pciOXS2Xq91/rSGEdmEnUWZCqA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-avatar@1.1.3':
    resolution: {integrity: sha512-Paen00T4P8L8gd9bNsRMw7Cbaz85oxiv+hzomsRZgFm2byltPFDtfcoqlWJ8GyZlIBWgLssJlzLCnKU0G0302g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-checkbox@1.1.4':
    resolution: {integrity: sha512-wP0CPAHq+P5I4INKe3hJrIa1WoNqqrejzW+zoU0rOvo1b9gDEJJFl2rYfO1PYJUQCc2H1WZxIJmyv9BS8i5fLw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collapsible@1.1.3':
    resolution: {integrity: sha512-jFSerheto1X03MUC0g6R7LedNW9EEGWdg9W1+MlpkMLwGkgkbUXLPBH/KIuWKXUoeYRVY11llqbTBDzuLg7qrw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.2':
    resolution: {integrity: sha512-9z54IEKRxIa9VityapoEYMuByaG42iSy1ZXlY2KcuLSEtq8x4987/N6m15ppoMffgZX72gER2uHe1D9Y6Unlcw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.1':
    resolution: {integrity: sha512-Y9VzoRDSJtgFMUCoiZBDVo084VQ5hfpXxVE+NgkdNsjiDBByiImMZKKhxMwCbdHvhlENG6a833CbFkOQvTricw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context-menu@2.2.6':
    resolution: {integrity: sha512-aUP99QZ3VU84NPsHeaFt4cQUNgJqFsLLOt/RbbWXszZ6MP0DpDyjkFZORr4RpAEx3sUBk+Kc8h13yGtC5Qw8dg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-context@1.1.1':
    resolution: {integrity: sha512-UASk9zi+crv9WteK/NU4PLvOoL3OuE6BWVKNF6hPRBtYBDXQ2u5iu3O59zUlJiTVvkyuycnqrztsHVJwcK9K+Q==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.6':
    resolution: {integrity: sha512-/IVhJV5AceX620DUJ4uYVMymzsipdKBzo3edo+omeskCKGm9FRHM0ebIdbPnlQVJqyuHbuBltQUOG2mOTq2IYw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-direction@1.1.0':
    resolution: {integrity: sha512-BUuBvgThEiAXh2DWu93XsT+a3aWrGqolGlqqw5VU1kG7p/ZH2cuDlM1sRLNnY3QcBS69UIz2mcKhMxDsdewhjg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.5':
    resolution: {integrity: sha512-E4TywXY6UsXNRhFrECa5HAvE5/4BFcGyfTyK36gP+pAW1ed7UTK4vKwdr53gAJYwqbfCWC6ATvJa3J3R/9+Qrg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dropdown-menu@2.1.6':
    resolution: {integrity: sha512-no3X7V5fD487wab/ZYSHXq3H37u4NVeLDKI/Ks724X/eEFSSEFYZxWgsIlr1UBeEyDaM29HM5x9p1Nv8DuTYPA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.1':
    resolution: {integrity: sha512-pSIwfrT1a6sIoDASCSpFwOasEwKTZWDw/iBdtnqKO7v6FeOzYJ7U53cPzYFVR3geGGXgVHaH+CdngrrAzqUGxg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.2':
    resolution: {integrity: sha512-zxwE80FCU7lcXUGWkdt6XpTTCKPitG1XKOwViTxHVKIJhZl9MvIl2dVHeZENCWD9+EdWv05wlaEkRXUykU27RA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-form@0.1.2':
    resolution: {integrity: sha512-Owj1MjLq6/Rp85bgzYI+zRK5APLiWDtXDM63Z39FW15bNdehrcS+FjQgLGQYswFzipYu4GAA+t5w/VqvvNZ3ag==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-hover-card@1.1.6':
    resolution: {integrity: sha512-E4ozl35jq0VRlrdc4dhHrNSV0JqBb4Jy73WAhBEK7JoYnQ83ED5r0Rb/XdVKw89ReAJN38N492BAPBZQ57VmqQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-icons@1.3.2':
    resolution: {integrity: sha512-fyQIhGDhzfc9pK2kH6Pl9c4BDJGfMkPqkyIgYDthyNYoNg3wVhoJMMh19WS4Up/1KMPFVpNsT2q3WmXn2N1m6g==}
    peerDependencies:
      react: ^16.x || ^17.x || ^18.x || ^19.0.0 || ^19.0.0-rc

  '@radix-ui/react-id@1.1.0':
    resolution: {integrity: sha512-EJUrI8yYh7WOjNOqpoJaf1jlFIH2LvtgAl+YcFqNCa+4hj64ZXmPkAKOFs/ukjz3byN6bdb/AVUqHkI8/uWWMA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-label@2.1.2':
    resolution: {integrity: sha512-zo1uGMTaNlHehDyFQcDZXRJhUPDuukcnHz0/jnrup0JA6qL+AFpAnty+7VKa9esuU5xTblAZzTGYJKSKaBxBhw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menu@2.1.6':
    resolution: {integrity: sha512-tBBb5CXDJW3t2mo9WlO7r6GTmWV0F0uzHZVFmlRmYpiSK1CDU5IKojP1pm7oknpBOrFZx/YgBRW9oorPO2S/Lg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menubar@1.1.6':
    resolution: {integrity: sha512-FHq7+3DlXwh/7FOM4i0G4bC4vPjiq89VEEvNF4VMLchGnaUuUbE5uKXMUCjdKaOghEEMeiKa5XCa2Pk4kteWmg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-navigation-menu@1.2.5':
    resolution: {integrity: sha512-myMHHQUZ3ZLTi8W381/Vu43Ia0NqakkQZ2vzynMmTUtQQ9kNkjzhOwkZC9TAM5R07OZUVIQyHC06f/9JZJpvvA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popover@1.1.6':
    resolution: {integrity: sha512-NQouW0x4/GnkFJ/pRqsIS3rM/k97VzKnVb2jB7Gq7VEGPy5g7uNV1ykySFt7eWSp3i2uSGFwaJcvIRJBAHmmFg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popper@1.2.2':
    resolution: {integrity: sha512-Rvqc3nOpwseCyj/rgjlJDYAgyfw7OC1tTkKn2ivhaMGcYt8FSBlahHOZak2i3QwkRXUXgGgzeEe2RuqeEHuHgA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.4':
    resolution: {integrity: sha512-sn2O9k1rPFYVyKd5LAJfo96JlSGVFpa1fS6UuBJfrZadudiw5tAmru+n1x7aMRQ84qDM71Zh1+SzK5QwU0tJfA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.2':
    resolution: {integrity: sha512-18TFr80t5EVgL9x1SwF/YGtfG+l0BS0PRAlCWBDoBEiDQjeKgnNZRVJp/oVBl24sr3Gbfwc/Qpj4OcWTQMsAEg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.0.2':
    resolution: {integrity: sha512-Ec/0d38EIuvDF+GZjcMU/Ze6MxntVJYO/fRlCPhCaVUyPY9WTalHJw54tp9sXeJo3tlShWpy41vQRgLRGOuz+w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-progress@1.1.2':
    resolution: {integrity: sha512-u1IgJFQ4zNAUTjGdDL5dcl/U8ntOR6jsnhxKb5RKp5Ozwl88xKR9EqRZOe/Mk8tnx0x5tNUe2F+MzsyjqMg0MA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-radio-group@1.2.3':
    resolution: {integrity: sha512-xtCsqt8Rp09FK50ItqEqTJ7Sxanz8EM8dnkVIhJrc/wkMMomSmXHvYbhv3E7Zx4oXh98aaLt9W679SUYXg4IDA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.2':
    resolution: {integrity: sha512-zgMQWkNO169GtGqRvYrzb0Zf8NhMHS2DuEB/TiEmVnpr5OqPU3i8lfbxaAmC2J/KYuIQxyoQQ6DxepyXp61/xw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-scroll-area@1.2.3':
    resolution: {integrity: sha512-l7+NNBfBYYJa9tNqVcP2AGvxdE3lmE6kFTBXdvHgUaZuy+4wGCL1Cl2AfaR7RKyimj7lZURGLwFO59k4eBnDJQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-select@2.1.6':
    resolution: {integrity: sha512-T6ajELxRvTuAMWH0YmRJ1qez+x4/7Nq7QIx7zJ0VK3qaEWdnWpNbEDnmWldG1zBDwqrLy5aLMUWcoGirVj5kMg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-separator@1.1.2':
    resolution: {integrity: sha512-oZfHcaAp2Y6KFBX6I5P1u7CQoy4lheCGiYj+pGFrHy8E/VNRb5E39TkTr3JrV520csPBTZjkuKFdEsjS5EUNKQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slider@1.2.3':
    resolution: {integrity: sha512-nNrLAWLjGESnhqBqcCNW4w2nn7LxudyMzeB6VgdyAnFLC6kfQgnAjSL2v6UkQTnDctJBlxrmxfplWS4iYjdUTw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.1.2':
    resolution: {integrity: sha512-YAKxaiGsSQJ38VzKH86/BPRC4rh+b1Jpa+JneA5LRE7skmLPNAyeG8kPJj/oo4STLvlrs8vkf/iYyc3A5stYCQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-switch@1.1.3':
    resolution: {integrity: sha512-1nc+vjEOQkJVsJtWPSiISGT6OKm4SiOdjMo+/icLxo2G4vxz1GntC5MzfL4v8ey9OEfw787QCD1y3mUv0NiFEQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-tabs@1.1.3':
    resolution: {integrity: sha512-9mFyI30cuRDImbmFF6O2KUJdgEOsGh9Vmx9x/Dh9tOhL7BngmQPQfwW4aejKm5OHpfWIdmeV6ySyuxoOGjtNng==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toast@1.2.6':
    resolution: {integrity: sha512-gN4dpuIVKEgpLn1z5FhzT9mYRUitbfZq9XqN/7kkBMUgFTzTG8x/KszWJugJXHcwxckY8xcKDZPz7kG3o6DsUA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toggle-group@1.1.2':
    resolution: {integrity: sha512-JBm6s6aVG/nwuY5eadhU2zDi/IwYS0sDM5ZWb4nymv/hn3hZdkw+gENn0LP4iY1yCd7+bgJaCwueMYJIU3vk4A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toggle@1.1.2':
    resolution: {integrity: sha512-lntKchNWx3aCHuWKiDY+8WudiegQvBpDRAYL8dKLRvKEH8VOpl0XX6SSU/bUBqIRJbcTy4+MW06Wv8vgp10rzQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toolbar@1.1.2':
    resolution: {integrity: sha512-wT20eQ7ScFk+kBMDmHp+lMk18cgxhu35b2Bn5deUcPxiVwfn5vuZgi7NGcHu8ocdkinahmp4FaSZysKDyRVPWQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-tooltip@1.1.8':
    resolution: {integrity: sha512-YAA2cu48EkJZdAMHC0dqo9kialOcRStbtiY4nJPaht7Ptrhcvpo+eDChaM6BIs8kL6a8Z5l5poiqLnXcNduOkA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.0':
    resolution: {integrity: sha512-CasTfvsy+frcFkbXtSJ2Zu9JHpN8TYKxkgJGWbjiZhFivxaeW7rMeZt7QELGVLaYVfFMsKHjb7Ak0nMEe+2Vfw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.1.0':
    resolution: {integrity: sha512-MtfMVJiSr2NjzS0Aa90NPTnvTSg6C/JLCV7ma0W6+OMV78vd8OyRpID+Ng9LxzsPbLeuBnWBA1Nq30AtBIDChw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.0':
    resolution: {integrity: sha512-L7vwWlR1kTTQ3oh7g1O0CBF3YCyyTj8NmhLR+phShpyA50HCfBFKVJTpshm9PzLiKmehsrQzTYTpX9HvmC9rhw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.0':
    resolution: {integrity: sha512-+FPE0rOdziWSrH9athwI1R0HDVbWlEhd+FR+aSDk4uWGmSJ9Z54sdZVDQPZAinJhJXwfT+qnj969mCsT2gfm5w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-previous@1.1.0':
    resolution: {integrity: sha512-Z/e78qg2YFnnXcW88A4JmTtm4ADckLno6F7OXotmkQfeuCVaKuYzqAATPhVzl3delXE7CxIV8shofPn3jPc5Og==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.0':
    resolution: {integrity: sha512-0Fmkebhr6PiseyZlYAOtLS+nb7jLmpqTrJyv61Pe68MKYW6OWdRE2kI70TaYY27u7H0lajqM3hSMMLFq18Z7nQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.0':
    resolution: {integrity: sha512-XW3/vWuIXHa+2Uwcc2ABSfcCledmXhhQPlGbfcRXbiUQI5Icjcg19BGCZVKKInYbvUCut/ufbbLLPFC5cbb1hw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-visually-hidden@1.1.2':
    resolution: {integrity: sha512-1SzA4ns2M1aRlvxErqhLHsBHoS5eI5UUcI2awAMgGUp4LoaoWOKYmvqDY2s/tltuPkh3Yk77YF/r3IRj+Amx4Q==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/rect@1.1.0':
    resolution: {integrity: sha512-A9+lCBZoaMJlVKcRBz2YByCG+Cp2t6nAnMnNba+XiWxnj6r4JUFqfsgwocMBZU9LPtdxC6wB56ySYpc7LQIoJg==}

  '@rtsao/scc@1.1.0':
    resolution: {integrity: sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==}

  '@rushstack/eslint-patch@1.10.5':
    resolution: {integrity: sha512-kkKUDVlII2DQiKy7UstOR1ErJP8kUKAQ4oa+SQtM0K+lPdmmjj0YnnxBgtTVYH7mUKtbsxeFC9y0AmK7Yb78/A==}

  '@sinclair/typebox@0.27.8':
    resolution: {integrity: sha512-+Fj43pSMwJs4KRrH/938Uf+uAELIgVBmQzg/q1YG10djyfA3TnrU8N8XzqCh/okZdszqBQTZf96idMfE5lnwTA==}

  '@sinonjs/commons@3.0.1':
    resolution: {integrity: sha512-K3mCHKQ9sVh8o1C9cxkwxaOmXoAMlDxC1mYyHrjqOWEcBjYr76t96zL2zlj5dUGZ3HSw240X1qgH3Mjf1yJWpQ==}

  '@sinonjs/fake-timers@10.3.0':
    resolution: {integrity: sha512-V4BG07kuYSUkTCSBHG8G8TNhM+F19jXFWnQtzj+we8DrkpSBCee9Z3Ms8yiGer/dlmhe35/Xdgyo3/0rQKg7YA==}

  '@stripe/react-stripe-js@3.3.0':
    resolution: {integrity: sha512-Qg4rUxhHNm8OPFuUPnzsU5eLYWhpKKMMs378f67BD7vG0RKttmeeaUDjObs83imRlSxv5L6WdDKiv3RXi/RfSw==}
    peerDependencies:
      '@stripe/stripe-js': ^1.44.1 || ^2.0.0 || ^3.0.0 || ^4.0.0 || ^5.0.0
      react: '>=16.8.0 <20.0.0'
      react-dom: '>=16.8.0 <20.0.0'

  '@stripe/stripe-js@5.8.0':
    resolution: {integrity: sha512-o41SYzMDu/aE7iXSW6dNH9XGLfMJyj5sfazbkMz6LdNI1vDPs1h1aldtXJNLKH22RGxjvFUd5AlEw2G2OA7bug==}
    engines: {node: '>=12.16'}

  '@swc/counter@0.1.3':
    resolution: {integrity: sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==}

  '@swc/helpers@0.5.15':
    resolution: {integrity: sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==}

  '@tanstack/query-core@4.36.1':
    resolution: {integrity: sha512-DJSilV5+ytBP1FbFcEJovv4rnnm/CokuVvrBEtW/Va9DvuJ3HksbXUJEpI0aV1KtuL4ZoO9AVE6PyNLzF7tLeA==}

  '@tanstack/react-query@4.36.1':
    resolution: {integrity: sha512-y7ySVHFyyQblPl3J3eQBWpXZkliroki3ARnBKsdJchlgt7yJLRDUcf4B8soufgiYt3pEQIkBWBx1N9/ZPIeUWw==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
      react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0
      react-native: '*'
    peerDependenciesMeta:
      react-dom:
        optional: true
      react-native:
        optional: true

  '@trpc/client@10.45.2':
    resolution: {integrity: sha512-ykALM5kYWTLn1zYuUOZ2cPWlVfrXhc18HzBDyRhoPYN0jey4iQHEFSEowfnhg1RvYnrAVjNBgHNeSAXjrDbGwg==}
    peerDependencies:
      '@trpc/server': 10.45.2

  '@trpc/next@10.45.2':
    resolution: {integrity: sha512-RSORmfC+/nXdmRY1pQ0AalsVgSzwNAFbZLYHiTvPM5QQ8wmMEHilseCYMXpu0se/TbPt9zVR6Ka2d7O6zxKkXg==}
    peerDependencies:
      '@tanstack/react-query': ^4.18.0
      '@trpc/client': 10.45.2
      '@trpc/react-query': 10.45.2
      '@trpc/server': 10.45.2
      next: '*'
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@trpc/react-query@10.45.2':
    resolution: {integrity: sha512-BAqb9bGZIscroradlNx+Cc9522R+idY3BOSf5z0jHUtkxdMbjeGKxSSMxxu7JzoLqSIEC+LVzL3VvF8sdDWaZQ==}
    peerDependencies:
      '@tanstack/react-query': ^4.18.0
      '@trpc/client': 10.45.2
      '@trpc/server': 10.45.2
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@trpc/react@9.27.4':
    resolution: {integrity: sha512-bP74Tf6vWcMoWYiTAvbWrieV9cFQiKUDKRoRj0+VeGJbxdbhdJyUzv4zos0T4SiSKuhgoEm9bP4jWU2NhNhpIA==}
    deprecated: 'Migrate to v10: https://trpc.io/docs/migrate-from-v9-to-v10. Also, this package has changed name to `@trpc/react-query`.'
    peerDependencies:
      '@trpc/client': 9.27.4
      '@trpc/server': 9.27.4
      react: '>=16.8.0'
      react-dom: '>=16.8.0'
      react-query: ^3.37.0

  '@trpc/server@10.45.2':
    resolution: {integrity: sha512-wOrSThNNE4HUnuhJG6PfDRp4L2009KDVxsd+2VYH8ro6o/7/jwYZ8Uu5j+VaW+mOmc8EHerHzGcdbGNQSAUPgg==}

  '@tsconfig/node10@1.0.11':
    resolution: {integrity: sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==}

  '@tsconfig/node12@1.0.11':
    resolution: {integrity: sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==}

  '@tsconfig/node14@1.0.3':
    resolution: {integrity: sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==}

  '@tsconfig/node16@1.0.4':
    resolution: {integrity: sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==}

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.6.8':
    resolution: {integrity: sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.20.6':
    resolution: {integrity: sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==}

  '@types/bcrypt@5.0.2':
    resolution: {integrity: sha512-6atioO8Y75fNcbmj0G7UjI9lXN2pQ/IGJ2FWT4a/btd0Lk9lQalHLKhkgKVZ3r+spnmWUKfbMi1GEe9wyHQfNQ==}

  '@types/bcryptjs@2.4.6':
    resolution: {integrity: sha512-9xlo6R2qDs5uixm0bcIqCeMCE6HiQsIyel9KQySStiyqNl2tnj2mP3DX1Nf56MD6KMenNNlBBsy3LJ7gUEQPXQ==}

  '@types/d3-array@3.2.1':
    resolution: {integrity: sha512-Y2Jn2idRrLzUfAKV2LyRImR+y4oa2AntrgID95SHJxuMUrkNXmanDSed71sRNZysveJVt1hLLemQZIady0FpEg==}

  '@types/d3-color@3.1.3':
    resolution: {integrity: sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A==}

  '@types/d3-ease@3.0.2':
    resolution: {integrity: sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA==}

  '@types/d3-interpolate@3.0.4':
    resolution: {integrity: sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==}

  '@types/d3-path@3.1.1':
    resolution: {integrity: sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg==}

  '@types/d3-scale@4.0.9':
    resolution: {integrity: sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==}

  '@types/d3-shape@3.1.7':
    resolution: {integrity: sha512-VLvUQ33C+3J+8p+Daf+nYSOsjB4GXp19/S/aGo60m9h1v6XaxjiT82lKVWJCfzhtuZ3yD7i/TPeC/fuKLLOSmg==}

  '@types/d3-time@3.0.4':
    resolution: {integrity: sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g==}

  '@types/d3-timer@3.0.2':
    resolution: {integrity: sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw==}

  '@types/eslint@8.56.12':
    resolution: {integrity: sha512-03ruubjWyOHlmljCVoxSuNDdmfZDzsrrz0P2LeJsOXr+ZwFQ+0yQIwNCwt/GYhV7Z31fgtXJTAEs+FYlEL851g==}

  '@types/estree@1.0.6':
    resolution: {integrity: sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==}

  '@types/graceful-fs@4.1.9':
    resolution: {integrity: sha512-olP3sd1qOEe5dXTSaFvQG+02VdRXcdytWLAZsAq1PecU8uqQAhkrnbli7DagjtXKW/Bl7YJbUsa8MPcuc8LHEQ==}

  '@types/istanbul-lib-coverage@2.0.6':
    resolution: {integrity: sha512-2QF/t/auWm0lsy8XtKVPG19v3sSOQlJe/YHZgfjb/KBBHOGSV+J2q/S671rcq9uTBrLAXmZpqJiaQbMT+zNU1w==}

  '@types/istanbul-lib-report@3.0.3':
    resolution: {integrity: sha512-NQn7AHQnk/RSLOxrBbGyJM/aVQ+pjj5HCgasFxc0K/KhoATfQ/47AyUl15I2yBUpihjmas+a+VJBOqecrFH+uA==}

  '@types/istanbul-reports@3.0.4':
    resolution: {integrity: sha512-pk2B1NWalF9toCRu6gjBzR69syFjP4Od8WRAX+0mmf9lAjCRicLOWc+ZrxZHx/0XRjotgkF9t6iaMJ+aXcOdZQ==}

  '@types/jest@29.5.14':
    resolution: {integrity: sha512-ZN+4sdnLUbo8EVvVc2ao0GFW6oVrQRPn4K2lglySj7APvSrgzxHiNNK99us4WDMi57xxA2yggblIAMNhXOotLQ==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/json5@0.0.29':
    resolution: {integrity: sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==}

  '@types/node@22.13.9':
    resolution: {integrity: sha512-acBjXdRJ3A6Pb3tqnw9HZmyR3Fiol3aGxRCK1x3d+6CDAMjl7I649wpSd+yNURCjbOUGu9tqtLKnTGxmK6CyGw==}

  '@types/prop-types@15.7.14':
    resolution: {integrity: sha512-gNMvNH49DJ7OJYv+KAKn0Xp45p8PLl6zo2YnvDIbTd4J6MER2BmWN49TG7n9LvkyihINxeKW8+3bfS2yDC9dzQ==}

  '@types/react-datepicker@7.0.0':
    resolution: {integrity: sha512-4tWwOUq589tozyQPBVEqGNng5DaZkomx5IVNuur868yYdgjH6RaL373/HKiVt1IDoNNXYiTGspm1F7kjrarM8Q==}
    deprecated: This is a stub types definition. react-datepicker provides its own type definitions, so you do not need this installed.

  '@types/react-dom@18.3.5':
    resolution: {integrity: sha512-P4t6saawp+b/dFrUr2cvkVsfvPguwsxtH6dNIYRllMsefqFzkZk5UIjzyDOv5g1dXIPdG4Sp1yCR4Z6RCUsG/Q==}
    peerDependencies:
      '@types/react': ^18.0.0

  '@types/react@18.3.18':
    resolution: {integrity: sha512-t4yC+vtgnkYjNSKlFx1jkAhH8LgTo2N/7Qvi83kdEaUtMDiwpbLAktKDaAMlRcJ5eSxZkH74eEGt1ky31d7kfQ==}

  '@types/semver@7.5.8':
    resolution: {integrity: sha512-I8EUhyrgfLrcTkzV3TSsGyl1tSuPrEDzr0yd5m90UgNxQkyDXULk3b6MlQqTCpZpNtWe1K0hzclnZkTcLBe2UQ==}

  '@types/stack-utils@2.0.3':
    resolution: {integrity: sha512-9aEbYZ3TbYMznPdcdr3SmIrLXwC/AKZXQeCf9Pgao5CKb8CyHuEX5jzWPTkvregvhRJHcpRO6BFoGW9ycaOkYw==}

  '@types/yargs-parser@21.0.3':
    resolution: {integrity: sha512-I4q9QU9MQv4oEOz4tAHJtNz1cwuLxn2F3xcc2iV5WdqLPpUnj30aUuxt1mAxYTG+oe8CZMV/+6rU4S4gRDzqtQ==}

  '@types/yargs@17.0.33':
    resolution: {integrity: sha512-WpxBCKWPLr4xSsHgz511rFJAM+wS28w2zEO1QDNY5zM/S8ok70NNfztH0xwhqKyaK0OHCbN98LDAZuy1ctxDkA==}

  '@typescript-eslint/eslint-plugin@6.21.0':
    resolution: {integrity: sha512-oy9+hTPCUFpngkEZUSzbf9MxI65wbKFoQYsgPdILTfbUldp5ovUuphZVe4i30emU9M/kP+T64Di0mxl7dSw3MA==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      '@typescript-eslint/parser': ^6.0.0 || ^6.0.0-alpha
      eslint: ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/parser@6.21.0':
    resolution: {integrity: sha512-tbsV1jPne5CkFQCgPBcDOt30ItF7aJoZL997JSF7MhGQqOeT3svWRYxiqlfA5RUdlHN6Fi+EI9bxqbdyAUZjYQ==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/scope-manager@6.21.0':
    resolution: {integrity: sha512-OwLUIWZJry80O99zvqXVEioyniJMa+d2GrqpUTqi5/v5D5rOrppJVBPa0yKCblcigC0/aYAzxxqQ1B+DS2RYsg==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@typescript-eslint/type-utils@6.21.0':
    resolution: {integrity: sha512-rZQI7wHfao8qMX3Rd3xqeYSMCL3SoiSQLBATSiVKARdFGCYSRvmViieZjqc58jKgs8Y8i9YvVVhRbHSTA4VBag==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/types@6.21.0':
    resolution: {integrity: sha512-1kFmZ1rOm5epu9NZEZm1kckCDGj5UJEf7P1kliH4LKu/RkwpsfqqGmY2OOcUs18lSlQBKLDYBOGxRVtrMN5lpg==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@typescript-eslint/typescript-estree@6.21.0':
    resolution: {integrity: sha512-6npJTkZcO+y2/kr+z0hc4HwNfrrP4kNYh57ek7yCNlrBjWQ1Y0OS7jiZTkgumrvkX5HkEKXFZkkdFNkaW2wmUQ==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/utils@6.21.0':
    resolution: {integrity: sha512-NfWVaC8HP9T8cbKQxHcsJBY5YE1O33+jpMwN45qzWWaPDZgLIbo12toGMWnmhvCpd3sIxkpDw3Wv1B3dYrbDQQ==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0

  '@typescript-eslint/visitor-keys@6.21.0':
    resolution: {integrity: sha512-JJtkDduxLi9bivAB+cYOVMtbkqdPOhZ+ZI5LC47MIRrDV4Yn2o+ZnW10Nkmr28xRpSpdJ6Sm42Hjf2+REYXm0A==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@ungap/structured-clone@1.3.0':
    resolution: {integrity: sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==}

  abbrev@1.1.1:
    resolution: {integrity: sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==}

  accepts@1.3.8:
    resolution: {integrity: sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==}
    engines: {node: '>= 0.6'}

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn-walk@8.3.4:
    resolution: {integrity: sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==}
    engines: {node: '>=0.4.0'}

  acorn@8.14.0:
    resolution: {integrity: sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  agent-base@6.0.2:
    resolution: {integrity: sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==}
    engines: {node: '>= 6.0.0'}

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-escapes@4.3.2:
    resolution: {integrity: sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==}
    engines: {node: '>=8'}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.1.0:
    resolution: {integrity: sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  aproba@2.0.0:
    resolution: {integrity: sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==}

  are-we-there-yet@2.0.0:
    resolution: {integrity: sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==}
    engines: {node: '>=10'}
    deprecated: This package is no longer supported.

  arg@4.1.3:
    resolution: {integrity: sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==}

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  argparse@1.0.10:
    resolution: {integrity: sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.4:
    resolution: {integrity: sha512-y+CcFFwelSXpLZk/7fMB2mUbGtX9lKycf1MWJ7CaTIERyitVlyQx6C+sxcROU2BAJ24OiZyK+8wj2i8AlBoS3A==}
    engines: {node: '>=10'}

  aria-query@5.3.2:
    resolution: {integrity: sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==}
    engines: {node: '>= 0.4'}

  array-buffer-byte-length@1.0.2:
    resolution: {integrity: sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==}
    engines: {node: '>= 0.4'}

  array-flatten@1.1.1:
    resolution: {integrity: sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==}

  array-includes@3.1.8:
    resolution: {integrity: sha512-itaWrbYbqpGXkGhZPGUulwnhVf5Hpy1xiCFsGqyIGglbBxmG5vSjxQen3/WGOjPpNEv1RtBLKxbmVXm8HpJStQ==}
    engines: {node: '>= 0.4'}

  array-union@2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}

  array.prototype.findlast@1.2.5:
    resolution: {integrity: sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==}
    engines: {node: '>= 0.4'}

  array.prototype.findlastindex@1.2.5:
    resolution: {integrity: sha512-zfETvRFA8o7EiNn++N5f/kaCw221hrpGsDmcpndVupkPzEc1Wuf3VgC0qby1BbHs7f5DVYjgtEU2LLh5bqeGfQ==}
    engines: {node: '>= 0.4'}

  array.prototype.flat@1.3.3:
    resolution: {integrity: sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==}
    engines: {node: '>= 0.4'}

  array.prototype.flatmap@1.3.3:
    resolution: {integrity: sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==}
    engines: {node: '>= 0.4'}

  array.prototype.tosorted@1.1.4:
    resolution: {integrity: sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==}
    engines: {node: '>= 0.4'}

  arraybuffer.prototype.slice@1.0.4:
    resolution: {integrity: sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==}
    engines: {node: '>= 0.4'}

  ast-types-flow@0.0.8:
    resolution: {integrity: sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==}

  async-function@1.0.0:
    resolution: {integrity: sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==}
    engines: {node: '>= 0.4'}

  async@3.2.6:
    resolution: {integrity: sha512-htCUDlxyyCLMgaM3xXg0C0LW2xqfuQ6p05pCEIsXuyQ+a1koYKTuBMzRNwmybfLgvJDMd0r1LTn4+E0Ti6C2AA==}

  autoprefixer@10.4.20:
    resolution: {integrity: sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  axe-core@4.10.2:
    resolution: {integrity: sha512-RE3mdQ7P3FRSe7eqCWoeQ/Z9QXrtniSjp1wUjt5nRC3WIpz5rSCve6o3fsZ2aCpJtrZjSZgjwXAoTO5k4tEI0w==}
    engines: {node: '>=4'}

  axios@0.19.2:
    resolution: {integrity: sha512-fjgm5MvRHLhx+osE2xoekY70AhARk3a6hkN+3Io1jc00jtquGvxYlKlsFUhmUET0V5te6CcZI7lcv2Ym61mjHA==}
    deprecated: Critical security vulnerability fixed in v0.21.1. For more information, see https://github.com/axios/axios/pull/3410

  axobject-query@4.1.0:
    resolution: {integrity: sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==}
    engines: {node: '>= 0.4'}

  babel-jest@29.7.0:
    resolution: {integrity: sha512-BrvGY3xZSwEcCzKvKsCi2GgHqDqsYkOP4/by5xCgIwGXQxIEh+8ew3gmrE1y7XRR6LHZIj6yLYnUi/mm2KXKBg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@babel/core': ^7.8.0

  babel-plugin-istanbul@6.1.1:
    resolution: {integrity: sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==}
    engines: {node: '>=8'}

  babel-plugin-jest-hoist@29.6.3:
    resolution: {integrity: sha512-ESAc/RJvGTFEzRwOTT4+lNDk/GNHMkKbNzsvT0qKRfDyyYTskxB5rnU2njIDYVxXCBHHEI1c0YwHob3WaYujOg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  babel-preset-current-node-syntax@1.1.0:
    resolution: {integrity: sha512-ldYss8SbBlWva1bs28q78Ju5Zq1F+8BrqBZZ0VFhLBvhh6lCpC2o3gDJi/5DRLs9FgYZCnmPYIVFU4lRXCkyUw==}
    peerDependencies:
      '@babel/core': ^7.0.0

  babel-preset-jest@29.6.3:
    resolution: {integrity: sha512-0B3bhxR6snWXJZtR/RliHTDPRgn1sNHOR0yVtq/IiQFyuOVjFS+wuio/R4gSNkyYmKmJB4wGZv2NZanmKmTnNA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@babel/core': ^7.0.0

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  bcrypt@5.1.1:
    resolution: {integrity: sha512-AGBHOG5hPYZ5Xl9KXzU5iKq9516yEmvCKDg3ecP5kX2aB6UqTeXZxk2ELnDgDm6BQSMlLt9rDB4LoSMx0rYwww==}
    engines: {node: '>= 10.0.0'}

  bcryptjs@2.4.3:
    resolution: {integrity: sha512-V/Hy/X9Vt7f3BbPJEi8BdVFMByHi+jNXrYkW3huaybV/kQ0KJg0Y6PkEMbn+zeT+i+SiKZ/HMqJGIIt4LZDqNQ==}

  big-integer@1.6.52:
    resolution: {integrity: sha512-QxD8cf2eVqJOOz63z6JIN9BzvVs/dlySa5HGSBH5xtR8dPteIRQnBxxKqkNTiT6jbDTF6jAfrd4oMcND9RGbQg==}
    engines: {node: '>=0.6'}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  body-parser@1.20.3:
    resolution: {integrity: sha512-7rAxByjUMqQ3/bHJy7D6OGXvx/MMc4IqBn/X0fcM1QUcAItpZrBEYhWGem+tzXH90c+G01ypMcYJBO9Y30203g==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}

  brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  broadcast-channel@3.7.0:
    resolution: {integrity: sha512-cIAKJXAxGJceNZGTZSBzMxzyOn72cVgPnKx4dc6LRjQgbaJUQqhy5rzL3zbMxkMWsGKkv2hSFkPRMEXfoMZ2Mg==}

  browserslist@4.24.4:
    resolution: {integrity: sha512-KDi1Ny1gSePi1vm0q4oxSF8b4DR44GF4BbmS2YdhPLOEqd8pDviZOGH/GsmRwoWJ2+5Lr085X7naowMwKHDG1A==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  bs-logger@0.2.6:
    resolution: {integrity: sha512-pd8DCoxmbgc7hyPKOvxtqNcjYoOsABPQdcCUjGp3d42VR2CX1ORhk2A87oqqu5R1kk+76nsxZupkmyd+MVtCog==}
    engines: {node: '>= 6'}

  bser@2.1.1:
    resolution: {integrity: sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==}

  buffer-from@1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  busboy@1.6.0:
    resolution: {integrity: sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==}
    engines: {node: '>=10.16.0'}

  bytes@3.1.2:
    resolution: {integrity: sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==}
    engines: {node: '>= 0.8'}

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.8:
    resolution: {integrity: sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  camelcase@5.3.1:
    resolution: {integrity: sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==}
    engines: {node: '>=6'}

  camelcase@6.3.0:
    resolution: {integrity: sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==}
    engines: {node: '>=10'}

  caniuse-lite@1.0.30001702:
    resolution: {integrity: sha512-LoPe/D7zioC0REI5W73PeR1e1MLCipRGq/VkovJnd6Df+QVqT+vT33OXCp8QUd7kA7RZrHWxb1B36OQKI/0gOA==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  char-regex@1.0.2:
    resolution: {integrity: sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==}
    engines: {node: '>=10'}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  chownr@2.0.0:
    resolution: {integrity: sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==}
    engines: {node: '>=10'}

  ci-info@3.9.0:
    resolution: {integrity: sha512-NIxF55hv4nSqQswkAeiOi1r83xy8JldOFDTWiug55KBu9Jnblncd2U6ViHmYgHf01TPZS77NJBhBMKdWj9HQMQ==}
    engines: {node: '>=8'}

  cjs-module-lexer@1.4.3:
    resolution: {integrity: sha512-9z8TZaGM1pfswYeXrUpzPrkx8UnWYdhJclsiYMm6x/w5+nN+8Tf/LnAgfLGQCm59qAOxU8WwHEq2vNwF6i4j+Q==}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  cliui@8.0.1:
    resolution: {integrity: sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==}
    engines: {node: '>=12'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  co@4.6.0:
    resolution: {integrity: sha512-QVb0dM5HvG+uaxitm8wONl7jltx8dqhfU33DcqtOZcLSVIKSDDLDi7+0LbAKiyI8hD9u42m2YxXSkMGWThaecQ==}
    engines: {iojs: '>= 1.0.0', node: '>= 0.12.0'}

  collect-v8-coverage@1.0.2:
    resolution: {integrity: sha512-lHl4d5/ONEbLlJvaJNtsF/Lz+WvB07u2ycqTYbdrq7UypDXailES4valYb2eWiJFxZlVmpGekfqoxQhzyFdT4Q==}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  color-string@1.9.1:
    resolution: {integrity: sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==}

  color-support@1.1.3:
    resolution: {integrity: sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==}
    hasBin: true

  color@4.2.3:
    resolution: {integrity: sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==}
    engines: {node: '>=12.5.0'}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  console-control-strings@1.1.0:
    resolution: {integrity: sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==}

  content-disposition@0.5.4:
    resolution: {integrity: sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==}
    engines: {node: '>= 0.6'}

  content-type@1.0.5:
    resolution: {integrity: sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==}
    engines: {node: '>= 0.6'}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cookie-signature@1.0.6:
    resolution: {integrity: sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==}

  cookie@0.7.1:
    resolution: {integrity: sha512-6DnInpx7SJ2AK3+CTUE/ZM0vWTUboZCegxhC2xiIydHR9jNuTAASBrfEpHhiGOZw/nX51bHt6YQl8jsGo4y/0w==}
    engines: {node: '>= 0.6'}

  cookie@0.7.2:
    resolution: {integrity: sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==}
    engines: {node: '>= 0.6'}

  copy-anything@3.0.5:
    resolution: {integrity: sha512-yCEafptTtb4bk7GLEQoM8KVJpxAfdBJYaXyzQEgQQQgYrZiDp8SJmGKlYza6CYjEDNstAdNdKA3UuoULlEbS6w==}
    engines: {node: '>=12.13'}

  create-jest@29.7.0:
    resolution: {integrity: sha512-Adz2bdH0Vq3F53KEMJOoftQFutWCukm6J24wbPWRO4k1kMY7gS7ds/uoJkNuV8wDCtWWnuwGcJwpWcih+zEW1Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true

  create-require@1.1.1:
    resolution: {integrity: sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  d3-array@3.2.4:
    resolution: {integrity: sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==}
    engines: {node: '>=12'}

  d3-color@3.1.0:
    resolution: {integrity: sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==}
    engines: {node: '>=12'}

  d3-ease@3.0.1:
    resolution: {integrity: sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==}
    engines: {node: '>=12'}

  d3-format@3.1.0:
    resolution: {integrity: sha512-YyUI6AEuY/Wpt8KWLgZHsIU86atmikuoOmCfommt0LYHiQSPjvX2AcFc38PX0CBpr2RCyZhjex+NS/LPOv6YqA==}
    engines: {node: '>=12'}

  d3-interpolate@3.0.1:
    resolution: {integrity: sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==}
    engines: {node: '>=12'}

  d3-path@3.1.0:
    resolution: {integrity: sha512-p3KP5HCf/bvjBSSKuXid6Zqijx7wIfNW+J/maPs+iwR35at5JCbLUT0LzF1cnjbCHWhqzQTIN2Jpe8pRebIEFQ==}
    engines: {node: '>=12'}

  d3-scale@4.0.2:
    resolution: {integrity: sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==}
    engines: {node: '>=12'}

  d3-shape@3.2.0:
    resolution: {integrity: sha512-SaLBuwGm3MOViRq2ABk3eLoxwZELpH6zhl3FbAoJ7Vm1gofKx6El1Ib5z23NUEhF9AsGl7y+dzLe5Cw2AArGTA==}
    engines: {node: '>=12'}

  d3-time-format@4.1.0:
    resolution: {integrity: sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==}
    engines: {node: '>=12'}

  d3-time@3.1.0:
    resolution: {integrity: sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==}
    engines: {node: '>=12'}

  d3-timer@3.0.1:
    resolution: {integrity: sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==}
    engines: {node: '>=12'}

  damerau-levenshtein@1.0.8:
    resolution: {integrity: sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==}

  data-view-buffer@1.0.2:
    resolution: {integrity: sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-length@1.0.2:
    resolution: {integrity: sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-offset@1.0.1:
    resolution: {integrity: sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==}
    engines: {node: '>= 0.4'}

  date-fns@3.6.0:
    resolution: {integrity: sha512-fRHTG8g/Gif+kSh50gaGEdToemgfj74aRX3swtiouboip5JDLAyDE9F11nHMIcvOaXeOC6D7SpNhi7uFyB7Uww==}

  date-fns@4.1.0:
    resolution: {integrity: sha512-Ukq0owbQXxa/U3EGtsdVBkR1w7KOQ5gIBqdH2hkvknzZPYvBxb/aa6E8L7tmjFtkwZBu3UXBbjIgPo/Ez4xaNg==}

  debug@2.6.9:
    resolution: {integrity: sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@3.1.0:
    resolution: {integrity: sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@3.2.7:
    resolution: {integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.0:
    resolution: {integrity: sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decimal.js-light@2.5.1:
    resolution: {integrity: sha512-qIMFpTMZmny+MMIitAB6D7iVPEorVw6YQRWkvarTkT4tBeSLLiHzcwj6q0MmYSFCiVpiqPJTJEYIrpcPzVEIvg==}

  dedent@1.5.3:
    resolution: {integrity: sha512-NHQtfOOW68WD8lgypbLA5oT+Bt0xXJhiYvoR6SmmNXZfpzOGXwdKWmcwG8N7PwVVWV3eF/68nmD9BaJSsTBhyQ==}
    peerDependencies:
      babel-plugin-macros: ^3.1.0
    peerDependenciesMeta:
      babel-plugin-macros:
        optional: true

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  deepmerge@4.3.1:
    resolution: {integrity: sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==}
    engines: {node: '>=0.10.0'}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  delegates@1.0.0:
    resolution: {integrity: sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==}

  depd@2.0.0:
    resolution: {integrity: sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==}
    engines: {node: '>= 0.8'}

  destroy@1.2.0:
    resolution: {integrity: sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}

  detect-libc@2.0.3:
    resolution: {integrity: sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==}
    engines: {node: '>=8'}

  detect-newline@3.1.0:
    resolution: {integrity: sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==}
    engines: {node: '>=8'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  detect-node@2.1.0:
    resolution: {integrity: sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  diff-sequences@29.6.3:
    resolution: {integrity: sha512-EjePK1srD3P08o2j4f0ExnylqRs5B9tJjcp9t1krH2qRi8CCdsYfwe9JgSLurFBWwq4uOlipzfk5fHNvwFKr8Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  diff@4.0.2:
    resolution: {integrity: sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==}
    engines: {node: '>=0.3.1'}

  dir-glob@3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  doctrine@2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}

  doctrine@3.0.0:
    resolution: {integrity: sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==}
    engines: {node: '>=6.0.0'}

  dom-helpers@5.2.1:
    resolution: {integrity: sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  ee-first@1.1.1:
    resolution: {integrity: sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==}

  ejs@3.1.10:
    resolution: {integrity: sha512-UeJmFfOrAQS8OJWPZ4qtgHyWExa088/MtK5UEyoJGFH67cDEXkZSviOiKRCZ4Xij0zxI3JECgYs3oKx+AizQBA==}
    engines: {node: '>=0.10.0'}
    hasBin: true

  electron-to-chromium@1.5.112:
    resolution: {integrity: sha512-oen93kVyqSb3l+ziUgzIOlWt/oOuy4zRmpwestMn4rhFWAoFJeFuCVte9F2fASjeZZo7l/Cif9TiyrdW4CwEMA==}

  emittery@0.13.1:
    resolution: {integrity: sha512-DeWwawk6r5yR9jFgnDKYt4sLS0LmHJJi3ZOnb5/JdbYwj3nW+FxQnHIjhBKz8YLC7oRNPVM9NQ47I3CVx34eqQ==}
    engines: {node: '>=12'}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  encodeurl@1.0.2:
    resolution: {integrity: sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==}
    engines: {node: '>= 0.8'}

  encodeurl@2.0.0:
    resolution: {integrity: sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==}
    engines: {node: '>= 0.8'}

  enhanced-resolve@5.18.1:
    resolution: {integrity: sha512-ZSW3ma5GkcQBIpwZTSRAI8N71Uuwgs93IezB7mf7R60tC8ZbJideoDNKjHn2O9KIlx6rkGTTEk1xUCK2E1Y2Yg==}
    engines: {node: '>=10.13.0'}

  error-ex@1.3.2:
    resolution: {integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==}

  es-abstract@1.23.9:
    resolution: {integrity: sha512-py07lI0wjxAC/DcfK1S6G7iANonniZwTISvdPzk9hzeH0IZIshbuuFxLIU96OyF89Yb9hiqWn8M/bY83KY5vzA==}
    engines: {node: '>= 0.4'}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-iterator-helpers@1.2.1:
    resolution: {integrity: sha512-uDn+FE1yrDzyC0pCo961B2IHbdM8y/ACZsKD4dG6WqrjV53BADjwa7D+1aom2rsNVfLyDgU/eigvlJGJ08OQ4w==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.1.1:
    resolution: {integrity: sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.1.0:
    resolution: {integrity: sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==}
    engines: {node: '>= 0.4'}

  es-shim-unscopables@1.1.0:
    resolution: {integrity: sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==}
    engines: {node: '>= 0.4'}

  es-to-primitive@1.3.0:
    resolution: {integrity: sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==}
    engines: {node: '>= 0.4'}

  esbuild-register@3.6.0:
    resolution: {integrity: sha512-H2/S7Pm8a9CL1uhp9OvjwrBh5Pvx0H8qVOxNu8Wed9Y7qv56MPtq+GGM8RJpq6glYJn9Wspr8uw7l55uyinNeg==}
    peerDependencies:
      esbuild: '>=0.12 <1'

  esbuild@0.25.0:
    resolution: {integrity: sha512-BXq5mqc8ltbaN34cDqWuYKyNhX8D/Z0J1xdtdQ8UcIIIyJyz+ZMKUt58tF3SrZ85jcfN/PZYhjR5uDQAYNVbuw==}
    engines: {node: '>=18'}
    hasBin: true

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-html@1.0.3:
    resolution: {integrity: sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==}

  escape-string-regexp@2.0.0:
    resolution: {integrity: sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==}
    engines: {node: '>=8'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-config-next@14.2.24:
    resolution: {integrity: sha512-9r1ujK++Pgpfixr5+DQ6rXDIQmSzuDbBlAQYMkJRMz9KWqovX7ESUTC0EAyBfOCl3ubkoeplw+aoXDuih3A8fw==}
    peerDependencies:
      eslint: ^7.23.0 || ^8.0.0
      typescript: '>=3.3.1'
    peerDependenciesMeta:
      typescript:
        optional: true

  eslint-import-resolver-node@0.3.9:
    resolution: {integrity: sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==}

  eslint-import-resolver-typescript@3.8.3:
    resolution: {integrity: sha512-A0bu4Ks2QqDWNpeEgTQMPTngaMhuDu4yv6xpftBMAf+1ziXnpx+eSR1WRfoPTe2BAiAjHFZ7kSNx1fvr5g5pmQ==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      eslint: '*'
      eslint-plugin-import: '*'
      eslint-plugin-import-x: '*'
    peerDependenciesMeta:
      eslint-plugin-import:
        optional: true
      eslint-plugin-import-x:
        optional: true

  eslint-module-utils@2.12.0:
    resolution: {integrity: sha512-wALZ0HFoytlyh/1+4wuZ9FJCD/leWHQzzrxJ8+rebyReSLk7LApMyd3WJaLVoN+D5+WIdJyDK1c6JnE65V4Zyg==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: '*'
      eslint-import-resolver-node: '*'
      eslint-import-resolver-typescript: '*'
      eslint-import-resolver-webpack: '*'
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true
      eslint:
        optional: true
      eslint-import-resolver-node:
        optional: true
      eslint-import-resolver-typescript:
        optional: true
      eslint-import-resolver-webpack:
        optional: true

  eslint-plugin-import@2.31.0:
    resolution: {integrity: sha512-ixmkI62Rbc2/w8Vfxyh1jQRTdRTF52VxwRVHl/ykPAmqG+Nb7/kNn+byLP0LxPgI7zWA16Jt82SybJInmMia3A==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: ^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true

  eslint-plugin-jsx-a11y@6.10.2:
    resolution: {integrity: sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==}
    engines: {node: '>=4.0'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9

  eslint-plugin-react-hooks@5.0.0-canary-7118f5dd7-20230705:
    resolution: {integrity: sha512-AZYbMo/NW9chdL7vk6HQzQhT+PvTAEVqWk9ziruUoW2kAOcN5qNyelv70e0F1VNQAbvutOC9oc+xfWycI9FxDw==}
    engines: {node: '>=10'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0

  eslint-plugin-react@7.37.4:
    resolution: {integrity: sha512-BGP0jRmfYyvOyvMoRX/uoUeW+GqNj9y16bPQzqAHf3AYII/tDs+jMN0dBVkl88/OZwNGwrVFxE7riHsXVfy/LQ==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7

  eslint-scope@7.2.2:
    resolution: {integrity: sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint@8.57.1:
    resolution: {integrity: sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    deprecated: This version is no longer supported. Please see https://eslint.org/version-support for other options.
    hasBin: true

  espree@9.6.1:
    resolution: {integrity: sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  esprima@4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  etag@1.8.1:
    resolution: {integrity: sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==}
    engines: {node: '>= 0.6'}

  eventemitter3@4.0.7:
    resolution: {integrity: sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==}

  execa@5.1.1:
    resolution: {integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==}
    engines: {node: '>=10'}

  exit@0.1.2:
    resolution: {integrity: sha512-Zk/eNKV2zbjpKzrsQ+n1G6poVbErQxJ0LBOJXaKZ1EViLzH+hrLu9cdXI4zw9dBQJslwBEpbQ2P1oS7nDxs6jQ==}
    engines: {node: '>= 0.8.0'}

  expect@29.7.0:
    resolution: {integrity: sha512-2Zks0hf1VLFYI1kbh0I5jP3KHHyCHpkfyHBzsSXRFgl/Bg9mWYfMW8oD+PdMPlEwy5HNsR9JutYy6pMeOh61nw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  express@4.21.2:
    resolution: {integrity: sha512-28HqgMZAmih1Czt9ny7qr6ek2qddF4FclbMzwhCREB6OFfH+rXAnuNCwo1/wFvrtbgsQDb4kSbX9de9lFbrXnA==}
    engines: {node: '>= 0.10.0'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-equals@5.2.2:
    resolution: {integrity: sha512-V7/RktU11J3I36Nwq2JnZEM7tNm17eBJz+u25qdxBZeCKiX6BkVSZQjwWIr+IobgnZy+ag73tTZgZi7tr0LrBw==}
    engines: {node: '>=6.0.0'}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fastq@1.19.1:
    resolution: {integrity: sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==}

  fb-watchman@2.0.2:
    resolution: {integrity: sha512-p5161BqbuCaSnB8jIbzQHOlpgsPmK5rJVDfDKO91Axs5NC1uu3HRQm6wt9cd9/+GtQQIO53JdGXXoyDpTAsgYA==}

  fdir@6.4.3:
    resolution: {integrity: sha512-PMXmW2y1hDDfTSRc9gaXIuCCRpuoz3Kaz8cUelp3smouvfT632ozg2vrT6lJsHKKOF59YLbOGfAWGUcKEfRMQw==}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  file-entry-cache@6.0.1:
    resolution: {integrity: sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==}
    engines: {node: ^10.12.0 || >=12.0.0}

  filelist@1.0.4:
    resolution: {integrity: sha512-w1cEuf3S+DrLCQL7ET6kz+gmlJdbq9J7yXCSjK/OZCPA+qEN1WyF4ZAf0YYJa4/shHJra2t/d/r8SV4Ji+x+8Q==}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  finalhandler@1.3.1:
    resolution: {integrity: sha512-6BN9trH7bp3qvnrRyzsBz+g3lZxTNZTbVO2EV1CS0WIcDbawYVdYvGflME/9QP0h0pYlCDBCTjYa9nZzMDpyxQ==}
    engines: {node: '>= 0.8'}

  find-up@4.1.0:
    resolution: {integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@3.2.0:
    resolution: {integrity: sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==}
    engines: {node: ^10.12.0 || >=12.0.0}

  flatted@3.3.3:
    resolution: {integrity: sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==}

  follow-redirects@1.5.10:
    resolution: {integrity: sha512-0V5l4Cizzvqt5D44aTXbFZz+FtyXV1vrDN6qrelxtfYQKW0KO0W2T/hkE8xvGa/540LkZlkaUjO4ailYTFtHVQ==}
    engines: {node: '>=4.0'}

  for-each@0.3.5:
    resolution: {integrity: sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==}
    engines: {node: '>= 0.4'}

  foreground-child@3.3.1:
    resolution: {integrity: sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==}
    engines: {node: '>=14'}

  forwarded@0.2.0:
    resolution: {integrity: sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==}
    engines: {node: '>= 0.6'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  fresh@0.5.2:
    resolution: {integrity: sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==}
    engines: {node: '>= 0.6'}

  fs-minipass@2.1.0:
    resolution: {integrity: sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==}
    engines: {node: '>= 8'}

  fs.realpath@1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  function.prototype.name@1.1.8:
    resolution: {integrity: sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==}
    engines: {node: '>= 0.4'}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  gauge@3.0.2:
    resolution: {integrity: sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==}
    engines: {node: '>=10'}
    deprecated: This package is no longer supported.

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-caller-file@2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-package-type@0.1.0:
    resolution: {integrity: sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==}
    engines: {node: '>=8.0.0'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-stream@6.0.1:
    resolution: {integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==}
    engines: {node: '>=10'}

  get-symbol-description@1.1.0:
    resolution: {integrity: sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==}
    engines: {node: '>= 0.4'}

  get-tsconfig@4.10.0:
    resolution: {integrity: sha512-kGzZ3LWWQcGIAmg6iWvXn0ei6WDtV26wzHRMwDSzmAbcXrTEXxHy6IehI6/4eT6VRKyMP1eF1VqwrVUmE/LR7A==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob@10.3.10:
    resolution: {integrity: sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  glob@10.4.5:
    resolution: {integrity: sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==}
    hasBin: true

  glob@7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    deprecated: Glob versions prior to v9 are no longer supported

  globals@11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}

  globals@13.24.0:
    resolution: {integrity: sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==}
    engines: {node: '>=8'}

  globalthis@1.0.4:
    resolution: {integrity: sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==}
    engines: {node: '>= 0.4'}

  globby@11.1.0:
    resolution: {integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==}
    engines: {node: '>=10'}

  goober@2.1.16:
    resolution: {integrity: sha512-erjk19y1U33+XAMe1VTvIONHYoSqE4iS7BYUZfHaqeohLmnC0FdxEh7rQU+6MZ4OajItzjZFSRtVANrQwNq6/g==}
    peerDependencies:
      csstype: ^3.0.10

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  has-bigints@1.1.0:
    resolution: {integrity: sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==}
    engines: {node: '>= 0.4'}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-proto@1.2.0:
    resolution: {integrity: sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==}
    engines: {node: '>= 0.4'}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  has-unicode@2.0.1:
    resolution: {integrity: sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  html-escaper@2.0.2:
    resolution: {integrity: sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==}

  http-errors@2.0.0:
    resolution: {integrity: sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==}
    engines: {node: '>= 0.8'}

  https-proxy-agent@5.0.1:
    resolution: {integrity: sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==}
    engines: {node: '>= 6'}

  human-signals@2.1.0:
    resolution: {integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==}
    engines: {node: '>=10.17.0'}

  iconv-lite@0.4.24:
    resolution: {integrity: sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==}
    engines: {node: '>=0.10.0'}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  import-local@3.2.0:
    resolution: {integrity: sha512-2SPlun1JUPWoM6t3F0dw0FkCF/jWY8kttcY4f599GLTSjh2OCuuhdTkJQsEcZzBqbXZGKMK2OqW1oZsjtf/gQA==}
    engines: {node: '>=8'}
    hasBin: true

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  inflight@1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    deprecated: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  internal-slot@1.1.0:
    resolution: {integrity: sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==}
    engines: {node: '>= 0.4'}

  internmap@2.0.3:
    resolution: {integrity: sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==}
    engines: {node: '>=12'}

  ipaddr.js@1.9.1:
    resolution: {integrity: sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==}
    engines: {node: '>= 0.10'}

  is-array-buffer@3.0.5:
    resolution: {integrity: sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==}
    engines: {node: '>= 0.4'}

  is-arrayish@0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  is-arrayish@0.3.2:
    resolution: {integrity: sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==}

  is-async-function@2.1.1:
    resolution: {integrity: sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==}
    engines: {node: '>= 0.4'}

  is-bigint@1.1.0:
    resolution: {integrity: sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==}
    engines: {node: '>= 0.4'}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-boolean-object@1.2.2:
    resolution: {integrity: sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==}
    engines: {node: '>= 0.4'}

  is-bun-module@1.3.0:
    resolution: {integrity: sha512-DgXeu5UWI0IsMQundYb5UAOzm6G2eVnarJ0byP6Tm55iZNKceD59LNPA2L4VvsScTtHcw0yEkVwSf7PC+QoLSA==}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.16.1:
    resolution: {integrity: sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==}
    engines: {node: '>= 0.4'}

  is-data-view@1.0.2:
    resolution: {integrity: sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==}
    engines: {node: '>= 0.4'}

  is-date-object@1.1.0:
    resolution: {integrity: sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-finalizationregistry@1.1.1:
    resolution: {integrity: sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==}
    engines: {node: '>= 0.4'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-generator-fn@2.1.0:
    resolution: {integrity: sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==}
    engines: {node: '>=6'}

  is-generator-function@1.1.0:
    resolution: {integrity: sha512-nPUB5km40q9e8UfN/Zc24eLlzdSf9OfKByBw9CIdw4H1giPMeA0OIJvbchsCu4npfI2QcMVBsGEBHKZ7wLTWmQ==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.1.1:
    resolution: {integrity: sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-path-inside@3.0.3:
    resolution: {integrity: sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==}
    engines: {node: '>=8'}

  is-regex@1.2.1:
    resolution: {integrity: sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.4:
    resolution: {integrity: sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==}
    engines: {node: '>= 0.4'}

  is-stream@2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}

  is-string@1.1.1:
    resolution: {integrity: sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==}
    engines: {node: '>= 0.4'}

  is-symbol@1.1.1:
    resolution: {integrity: sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.15:
    resolution: {integrity: sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==}
    engines: {node: '>= 0.4'}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakref@1.1.1:
    resolution: {integrity: sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==}
    engines: {node: '>= 0.4'}

  is-weakset@2.0.4:
    resolution: {integrity: sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==}
    engines: {node: '>= 0.4'}

  is-what@4.1.16:
    resolution: {integrity: sha512-ZhMwEosbFJkA0YhFnNDgTM4ZxDRsS6HqTo7qsZM08fehyRYIYa0yHu5R6mgo1n/8MgaPBXiPimPD77baVFYg+A==}
    engines: {node: '>=12.13'}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  istanbul-lib-coverage@3.2.2:
    resolution: {integrity: sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==}
    engines: {node: '>=8'}

  istanbul-lib-instrument@5.2.1:
    resolution: {integrity: sha512-pzqtp31nLv/XFOzXGuvhCb8qhjmTVo5vjVk19XE4CRlSWz0KoeJ3bw9XsA7nOp9YBf4qHjwBxkDzKcME/J29Yg==}
    engines: {node: '>=8'}

  istanbul-lib-instrument@6.0.3:
    resolution: {integrity: sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==}
    engines: {node: '>=10'}

  istanbul-lib-report@3.0.1:
    resolution: {integrity: sha512-GCfE1mtsHGOELCU8e/Z7YWzpmybrx/+dSTfLrvY8qRmaY6zXTKWn6WQIjaAFw069icm6GVMNkgu0NzI4iPZUNw==}
    engines: {node: '>=10'}

  istanbul-lib-source-maps@4.0.1:
    resolution: {integrity: sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==}
    engines: {node: '>=10'}

  istanbul-reports@3.1.7:
    resolution: {integrity: sha512-BewmUXImeuRk2YY0PVbxgKAysvhRPUQE0h5QRM++nVWyubKGV0l8qQ5op8+B2DOmwSe63Jivj0BjkPQVf8fP5g==}
    engines: {node: '>=8'}

  iterator.prototype@1.1.5:
    resolution: {integrity: sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==}
    engines: {node: '>= 0.4'}

  jackspeak@2.3.6:
    resolution: {integrity: sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==}
    engines: {node: '>=14'}

  jackspeak@3.4.3:
    resolution: {integrity: sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==}

  jake@10.9.2:
    resolution: {integrity: sha512-2P4SQ0HrLQ+fw6llpLnOaGAvN2Zu6778SJMrCUwns4fOoG9ayrTiZk3VV8sCPkVZF8ab0zksVpS8FDY5pRCNBA==}
    engines: {node: '>=10'}
    hasBin: true

  jest-changed-files@29.7.0:
    resolution: {integrity: sha512-fEArFiwf1BpQ+4bXSprcDc3/x4HSzL4al2tozwVpDFpsxALjLYdyiIK4e5Vz66GQJIbXJ82+35PtysofptNX2w==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-circus@29.7.0:
    resolution: {integrity: sha512-3E1nCMgipcTkCocFwM90XXQab9bS+GMsjdpmPrlelaxwD93Ad8iVEjX/vvHPdLPnFf+L40u+5+iutRdA1N9myw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-cli@29.7.0:
    resolution: {integrity: sha512-OVVobw2IubN/GSYsxETi+gOe7Ka59EFMR/twOU3Jb2GnKKeMGJB5SGUUrEz3SFVmJASUdZUzy83sLNNQ2gZslg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  jest-config@29.7.0:
    resolution: {integrity: sha512-uXbpfeQ7R6TZBqI3/TxCU4q4ttk3u0PJeC+E0zbfSoSjq6bJ7buBPxzQPL0ifrkY4DNu4JUdk0ImlBUYi840eQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@types/node': '*'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      '@types/node':
        optional: true
      ts-node:
        optional: true

  jest-diff@29.7.0:
    resolution: {integrity: sha512-LMIgiIrhigmPrs03JHpxUh2yISK3vLFPkAodPeo0+BuF7wA2FoQbkEg1u8gBYBThncu7e1oEDUfIXVuTqLRUjw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-docblock@29.7.0:
    resolution: {integrity: sha512-q617Auw3A612guyaFgsbFeYpNP5t2aoUNLwBUbc/0kD1R4t9ixDbyFTHd1nok4epoVFpr7PmeWHrhvuV3XaJ4g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-each@29.7.0:
    resolution: {integrity: sha512-gns+Er14+ZrEoC5fhOfYCY1LOHHr0TI+rQUHZS8Ttw2l7gl+80eHc/gFf2Ktkw0+SIACDTeWvpFcv3B04VembQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-environment-node@29.7.0:
    resolution: {integrity: sha512-DOSwCRqXirTOyheM+4d5YZOrWcdu0LNZ87ewUoywbcb2XR4wKgqiG8vNeYwhjFMbEkfju7wx2GYH0P2gevGvFw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-get-type@29.6.3:
    resolution: {integrity: sha512-zrteXnqYxfQh7l5FHyL38jL39di8H8rHoecLH3JNxH3BwOrBsNeabdap5e0I23lD4HHI8W5VFBZqG4Eaq5LNcw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-haste-map@29.7.0:
    resolution: {integrity: sha512-fP8u2pyfqx0K1rGn1R9pyE0/KTn+G7PxktWidOBTqFPLYX0b9ksaMFkhK5vrS3DVun09pckLdlx90QthlW7AmA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-leak-detector@29.7.0:
    resolution: {integrity: sha512-kYA8IJcSYtST2BY9I+SMC32nDpBT3J2NvWJx8+JCuCdl/CR1I4EKUJROiP8XtCcxqgTTBGJNdbB1A8XRKbTetw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-matcher-utils@29.7.0:
    resolution: {integrity: sha512-sBkD+Xi9DtcChsI3L3u0+N0opgPYnCRPtGcQYrgXmR+hmt/fYfWAL0xRXYU8eWOdfuLgBe0YCW3AFtnRLagq/g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-message-util@29.7.0:
    resolution: {integrity: sha512-GBEV4GRADeP+qtB2+6u61stea8mGcOT4mCtrYISZwfu9/ISHFJ/5zOMXYbpBE9RsS5+Gb63DW4FgmnKJ79Kf6w==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-mock@29.7.0:
    resolution: {integrity: sha512-ITOMZn+UkYS4ZFh83xYAOzWStloNzJFO2s8DWrE4lhtGD+AorgnbkiKERe4wQVBydIGPx059g6riW5Btp6Llnw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-pnp-resolver@1.2.3:
    resolution: {integrity: sha512-+3NpwQEnRoIBtx4fyhblQDPgJI0H1IEIkX7ShLUjPGA7TtUTvI1oiKi3SR4oBR0hQhQR80l4WAe5RrXBwWMA8w==}
    engines: {node: '>=6'}
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true

  jest-regex-util@29.6.3:
    resolution: {integrity: sha512-KJJBsRCyyLNWCNBOvZyRDnAIfUiRJ8v+hOBQYGn8gDyF3UegwiP4gwRR3/SDa42g1YbVycTidUF3rKjyLFDWbg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-resolve-dependencies@29.7.0:
    resolution: {integrity: sha512-un0zD/6qxJ+S0et7WxeI3H5XSe9lTBBR7bOHCHXkKR6luG5mwDDlIzVQ0V5cZCuoTgEdcdwzTghYkTWfubi+nA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-resolve@29.7.0:
    resolution: {integrity: sha512-IOVhZSrg+UvVAshDSDtHyFCCBUl/Q3AAJv8iZ6ZjnZ74xzvwuzLXid9IIIPgTnY62SJjfuupMKZsZQRsCvxEgA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-runner@29.7.0:
    resolution: {integrity: sha512-fsc4N6cPCAahybGBfTRcq5wFR6fpLznMg47sY5aDpsoejOcVYFb07AHuSnR0liMcPTgBsA3ZJL6kFOjPdoNipQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-runtime@29.7.0:
    resolution: {integrity: sha512-gUnLjgwdGqW7B4LvOIkbKs9WGbn+QLqRQQ9juC6HndeDiezIwhDP+mhMwHWCEcfQ5RUXa6OPnFF8BJh5xegwwQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-snapshot@29.7.0:
    resolution: {integrity: sha512-Rm0BMWtxBcioHr1/OX5YCP8Uov4riHvKPknOGs804Zg9JGZgmIBkbtlxJC/7Z4msKYVbIJtfU+tKb8xlYNfdkw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-util@29.7.0:
    resolution: {integrity: sha512-z6EbKajIpqGKU56y5KBUgy1dt1ihhQJgWzUlZHArA/+X2ad7Cb5iF+AK1EWVL/Bo7Rz9uurpqw6SiBCefUbCGA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-validate@29.7.0:
    resolution: {integrity: sha512-ZB7wHqaRGVw/9hST/OuFUReG7M8vKeq0/J2egIGLdvjHCmYqGARhzXmtgi+gVeZ5uXFF219aOc3Ls2yLg27tkw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-watcher@29.7.0:
    resolution: {integrity: sha512-49Fg7WXkU3Vl2h6LbLtMQ/HyB6rXSIX7SqvBLQmssRBGN9I0PNvPmAmCWSOY6SOvrjhI/F7/bGAv9RtnsPA03g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-worker@29.7.0:
    resolution: {integrity: sha512-eIz2msL/EzL9UFTFFx7jBTkeZfku0yUAyZZZmJ93H2TYEiroIx2PQjEXcwYtYl8zXCxb+PAmA2hLIt/6ZEkPHw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest@29.7.0:
    resolution: {integrity: sha512-NIy3oAFp9shda19hy4HK0HRTWKtPJmGdnvywu01nOqNC2vZg+Z+fvJDxpMQA88eb2I9EcafcdjYgsDthnYTvGw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  jiti@1.21.7:
    resolution: {integrity: sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==}
    hasBin: true

  jose@4.15.9:
    resolution: {integrity: sha512-1vUQX+IdDMVPj4k8kOxgUqlcK518yluMuGZwqlr44FS1ppZB/5GWh4rZG89erpOBOJjU/OBsnCVFfapsRz6nEA==}

  js-sha3@0.8.0:
    resolution: {integrity: sha512-gF1cRrHhIzNfToc802P800N8PpXS+evLLXfsVpowqmAFR9uwbi89WvXg2QspOmXL8QL86J4T1EpFu+yUkwJY3Q==}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@3.14.1:
    resolution: {integrity: sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==}
    hasBin: true

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-parse-even-better-errors@2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json5@1.0.2:
    resolution: {integrity: sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==}
    hasBin: true

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsx-ast-utils@3.3.5:
    resolution: {integrity: sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==}
    engines: {node: '>=4.0'}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  kleur@3.0.3:
    resolution: {integrity: sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==}
    engines: {node: '>=6'}

  language-subtag-registry@0.3.23:
    resolution: {integrity: sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==}

  language-tags@1.0.9:
    resolution: {integrity: sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==}
    engines: {node: '>=0.10'}

  leven@3.1.0:
    resolution: {integrity: sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==}
    engines: {node: '>=6'}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lilconfig@3.1.3:
    resolution: {integrity: sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  locate-path@5.0.0:
    resolution: {integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==}
    engines: {node: '>=8'}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.memoize@4.1.2:
    resolution: {integrity: sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag==}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  lodash@4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@10.4.3:
    resolution: {integrity: sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lru-cache@6.0.0:
    resolution: {integrity: sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==}
    engines: {node: '>=10'}

  lucide-react@0.469.0:
    resolution: {integrity: sha512-28vvUnnKQ/dBwiCQtwJw7QauYnE7yd2Cyp4tTTJpvglX4EMpbflcdBgrgToX2j71B3YvugK/NH3BGUk+E/p/Fw==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  make-dir@3.1.0:
    resolution: {integrity: sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==}
    engines: {node: '>=8'}

  make-dir@4.0.0:
    resolution: {integrity: sha512-hXdUTZYIVOt1Ex//jAQi+wTZZpUpwBj/0QsOzqegb3rGMMeJiSEu5xLHnYfBrRV4RH2+OCSOO95Is/7x1WJ4bw==}
    engines: {node: '>=10'}

  make-error@1.3.6:
    resolution: {integrity: sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==}

  makeerror@1.0.12:
    resolution: {integrity: sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==}

  match-sorter@6.3.4:
    resolution: {integrity: sha512-jfZW7cWS5y/1xswZo8VBOdudUiSd9nifYRWphc9M5D/ee4w4AoXLgBEdRbgVaxbMuagBPeUC5y2Hi8DO6o9aDg==}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  media-typer@0.3.0:
    resolution: {integrity: sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==}
    engines: {node: '>= 0.6'}

  merge-descriptors@1.0.3:
    resolution: {integrity: sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==}

  merge-stream@2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  methods@1.1.2:
    resolution: {integrity: sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==}
    engines: {node: '>= 0.6'}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  microseconds@0.2.0:
    resolution: {integrity: sha512-n7DHHMjR1avBbSpsTBj6fmMGh2AGrifVV4e+WYc3Q9lO+xnSZ3NyhcBND3vzzatt05LFhoKFRxrIyklmLlUtyA==}

  mime-db@1.52.0:
    resolution: {integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==}
    engines: {node: '>= 0.6'}

  mime-types@2.1.35:
    resolution: {integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==}
    engines: {node: '>= 0.6'}

  mime@1.6.0:
    resolution: {integrity: sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==}
    engines: {node: '>=4'}
    hasBin: true

  mimic-fn@2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@5.1.6:
    resolution: {integrity: sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==}
    engines: {node: '>=10'}

  minimatch@9.0.3:
    resolution: {integrity: sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  minipass@3.3.6:
    resolution: {integrity: sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==}
    engines: {node: '>=8'}

  minipass@5.0.0:
    resolution: {integrity: sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==}
    engines: {node: '>=8'}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  minizlib@2.1.2:
    resolution: {integrity: sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==}
    engines: {node: '>= 8'}

  mkdirp@1.0.4:
    resolution: {integrity: sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==}
    engines: {node: '>=10'}
    hasBin: true

  ms@2.0.0:
    resolution: {integrity: sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nano-time@1.0.0:
    resolution: {integrity: sha512-flnngywOoQ0lLQOTRNexn2gGSNuM9bKj9RZAWSzhQ+UJYaAFG9bac4DW9VHjUAzrOaIcajHybCTHe/bkvozQqA==}

  nanoid@3.3.8:
    resolution: {integrity: sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  negotiator@0.6.3:
    resolution: {integrity: sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==}
    engines: {node: '>= 0.6'}

  next-auth@4.24.11:
    resolution: {integrity: sha512-pCFXzIDQX7xmHFs4KVH4luCjaCbuPRtZ9oBUjUhOk84mZ9WVPf94n87TxYI4rSRf9HmfHEF8Yep3JrYDVOo3Cw==}
    peerDependencies:
      '@auth/core': 0.34.2
      next: ^12.2.5 || ^13 || ^14 || ^15
      nodemailer: ^6.6.5
      react: ^17.0.2 || ^18 || ^19
      react-dom: ^17.0.2 || ^18 || ^19
    peerDependenciesMeta:
      '@auth/core':
        optional: true
      nodemailer:
        optional: true

  next@15.2.1:
    resolution: {integrity: sha512-zxbsdQv3OqWXybK5tMkPCBKyhIz63RstJ+NvlfkaLMc/m5MwXgz2e92k+hSKcyBpyADhMk2C31RIiaDjUZae7g==}
    engines: {node: ^18.18.0 || ^19.8.0 || >= 20.0.0}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.41.2
      babel-plugin-react-compiler: '*'
      react: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      react-dom: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-addon-api@5.1.0:
    resolution: {integrity: sha512-eh0GgfEkpnoWDq+VY8OyvYhFEzBk6jIYbRKdIlyTiAXIVJ8PyBaKb0rp7oDtoddbdoHWhq8wwr+XZ81F1rpNdA==}

  node-fetch@2.7.0:
    resolution: {integrity: sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true

  node-int64@0.4.0:
    resolution: {integrity: sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==}

  node-releases@2.0.19:
    resolution: {integrity: sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==}

  nopt@5.0.0:
    resolution: {integrity: sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==}
    engines: {node: '>=6'}
    hasBin: true

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  npm-run-path@4.0.1:
    resolution: {integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==}
    engines: {node: '>=8'}

  npmlog@5.0.1:
    resolution: {integrity: sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==}
    deprecated: This package is no longer supported.

  oauth@0.9.15:
    resolution: {integrity: sha512-a5ERWK1kh38ExDEfoO6qUHJb32rd7aYmPHuyCu3Fta/cnICvYmgd2uhuKXvPD+PXB+gCEYYEaQdIRAjCOwAKNA==}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@2.2.0:
    resolution: {integrity: sha512-gScRMn0bS5fH+IuwyIFgnh9zBdo4DV+6GhygmWM9HyNJSgS0hScp1f5vjtm7oIIOiT9trXrShAkLFSc2IqKNgw==}
    engines: {node: '>= 6'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.7:
    resolution: {integrity: sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==}
    engines: {node: '>= 0.4'}

  object.entries@1.1.8:
    resolution: {integrity: sha512-cmopxi8VwRIAw/fkijJohSfpef5PdN0pMQJN6VC/ZKvn0LIknWD8KtgY6KlQdEc4tIjcQ3HxSMmnvtzIscdaYQ==}
    engines: {node: '>= 0.4'}

  object.fromentries@2.0.8:
    resolution: {integrity: sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==}
    engines: {node: '>= 0.4'}

  object.groupby@1.0.3:
    resolution: {integrity: sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==}
    engines: {node: '>= 0.4'}

  object.values@1.2.1:
    resolution: {integrity: sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==}
    engines: {node: '>= 0.4'}

  oblivious-set@1.0.0:
    resolution: {integrity: sha512-z+pI07qxo4c2CulUHCDf9lcqDlMSo72N/4rLUpRXf6fu+q8vjt8y0xS+Tlf8NTJDdTXHbdeO1n3MlbctwEoXZw==}

  oidc-token-hash@5.1.0:
    resolution: {integrity: sha512-y0W+X7Ppo7oZX6eovsRkuzcSM40Bicg2JEJkDJ4irIt1wsYAP5MLSNv+QAogO8xivMffw/9OvV3um1pxXgt1uA==}
    engines: {node: ^10.13.0 || >=12.0.0}

  on-finished@2.4.1:
    resolution: {integrity: sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==}
    engines: {node: '>= 0.8'}

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  onetime@5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}

  openid-client@5.7.1:
    resolution: {integrity: sha512-jDBPgSVfTnkIh71Hg9pRvtJc6wTwqjRkN88+gCFtYWrlP4Yx2Dsrow8uPi3qLr/aeymPF3o2+dS+wOpglK04ew==}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  own-keys@1.0.1:
    resolution: {integrity: sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==}
    engines: {node: '>= 0.4'}

  p-limit@2.3.0:
    resolution: {integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==}
    engines: {node: '>=6'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@4.1.0:
    resolution: {integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==}
    engines: {node: '>=8'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  p-try@2.2.0:
    resolution: {integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==}
    engines: {node: '>=6'}

  package-json-from-dist@1.0.1:
    resolution: {integrity: sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  parse-json@5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}

  parseurl@1.3.3:
    resolution: {integrity: sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==}
    engines: {node: '>= 0.8'}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-is-absolute@1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  path-to-regexp@0.1.12:
    resolution: {integrity: sha512-RA1GjUVMnvYFxuqovrEqZoxxW5NUZqbwKtYz/Tt7nXerk0LbLblQmrsgdeOxV5SFHf0UDggjS/bSeOZwt1pmEQ==}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.2:
    resolution: {integrity: sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==}
    engines: {node: '>=12'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}

  pkg-dir@4.2.0:
    resolution: {integrity: sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==}
    engines: {node: '>=8'}

  possible-typed-array-names@1.1.0:
    resolution: {integrity: sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==}
    engines: {node: '>= 0.4'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.0.1:
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@4.0.2:
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-nested@6.2.0:
    resolution: {integrity: sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.1.2:
    resolution: {integrity: sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.3:
    resolution: {integrity: sha512-dle9A3yYxlBSrt8Fu+IpjGT8SY8hN0mlaA6GY8t0P5PjIOZemULz/E2Bnm/2dcUOena75OTNkHI76uZBNUUq3A==}
    engines: {node: ^10 || ^12 || >=14}

  preact-render-to-string@5.2.6:
    resolution: {integrity: sha512-JyhErpYOvBV1hEPwIxc/fHWXPfnEGdRKxc8gFdAZ7XV4tlzyzG847XAyEZqoDnynP88akM4eaHcSOzNcLWFguw==}
    peerDependencies:
      preact: '>=10'

  preact@10.26.4:
    resolution: {integrity: sha512-KJhO7LBFTjP71d83trW+Ilnjbo+ySsaAgCfXOXUlmGzJ4ygYPWmysm77yg4emwfmoz3b22yvH5IsVFHbhUaH5w==}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  prettier-plugin-tailwindcss@0.5.14:
    resolution: {integrity: sha512-Puaz+wPUAhFp8Lo9HuciYKM2Y2XExESjeT+9NQoVFXZsPPnc9VYss2SpxdQ6vbatmt8/4+SN0oe0I1cPDABg9Q==}
    engines: {node: '>=14.21.3'}
    peerDependencies:
      '@ianvs/prettier-plugin-sort-imports': '*'
      '@prettier/plugin-pug': '*'
      '@shopify/prettier-plugin-liquid': '*'
      '@trivago/prettier-plugin-sort-imports': '*'
      '@zackad/prettier-plugin-twig-melody': '*'
      prettier: ^3.0
      prettier-plugin-astro: '*'
      prettier-plugin-css-order: '*'
      prettier-plugin-import-sort: '*'
      prettier-plugin-jsdoc: '*'
      prettier-plugin-marko: '*'
      prettier-plugin-organize-attributes: '*'
      prettier-plugin-organize-imports: '*'
      prettier-plugin-sort-imports: '*'
      prettier-plugin-style-order: '*'
      prettier-plugin-svelte: '*'
    peerDependenciesMeta:
      '@ianvs/prettier-plugin-sort-imports':
        optional: true
      '@prettier/plugin-pug':
        optional: true
      '@shopify/prettier-plugin-liquid':
        optional: true
      '@trivago/prettier-plugin-sort-imports':
        optional: true
      '@zackad/prettier-plugin-twig-melody':
        optional: true
      prettier-plugin-astro:
        optional: true
      prettier-plugin-css-order:
        optional: true
      prettier-plugin-import-sort:
        optional: true
      prettier-plugin-jsdoc:
        optional: true
      prettier-plugin-marko:
        optional: true
      prettier-plugin-organize-attributes:
        optional: true
      prettier-plugin-organize-imports:
        optional: true
      prettier-plugin-sort-imports:
        optional: true
      prettier-plugin-style-order:
        optional: true
      prettier-plugin-svelte:
        optional: true

  prettier@3.5.3:
    resolution: {integrity: sha512-QQtaxnoDJeAkDvDKWCLiwIXkTgRhwYDEQCghU9Z6q03iyek/rxRh/2lC3HB7P8sWT2xC/y5JDctPLBIGzHKbhw==}
    engines: {node: '>=14'}
    hasBin: true

  pretty-format@29.7.0:
    resolution: {integrity: sha512-Pdlw/oPxN+aXdmM9R00JVC9WVFoCLTKJvDVLgmJ+qAffBMxsV85l/Lu7sNx4zSzPyoL2euImuEwHhOXdEgNFZQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  pretty-format@3.8.0:
    resolution: {integrity: sha512-WuxUnVtlWL1OfZFQFuqvnvs6MiAGk9UNsBostyBOB0Is9wb5uRESevA6rnl/rkksXaGX3GzZhPup5d6Vp1nFew==}

  prisma@6.4.1:
    resolution: {integrity: sha512-q2uJkgXnua/jj66mk6P9bX/zgYJFI/jn4Yp0aS6SPRrjH/n6VyOV7RDe1vHD0DX8Aanx4MvgmUPPoYnR6MJnPg==}
    engines: {node: '>=18.18'}
    hasBin: true
    peerDependencies:
      typescript: '>=5.1.0'
    peerDependenciesMeta:
      typescript:
        optional: true

  prompts@2.4.2:
    resolution: {integrity: sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==}
    engines: {node: '>= 6'}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  proxy-addr@2.0.7:
    resolution: {integrity: sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==}
    engines: {node: '>= 0.10'}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  pure-rand@6.1.0:
    resolution: {integrity: sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==}

  qs@6.13.0:
    resolution: {integrity: sha512-+38qI9SOr8tfZ4QmJNplMUxqjbe7LKvvZgWdExBOmd+egZTtjLB67Gu0HRX3u/XOq7UU2Nx6nsjvS16Z9uwfpg==}
    engines: {node: '>=0.6'}

  qs@6.14.0:
    resolution: {integrity: sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==}
    engines: {node: '>=0.6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  radix-ui@1.1.3:
    resolution: {integrity: sha512-W8L6soM1vQnIXVvVa31AkQhoZBDPwVoNHhT13R3aB9Qq7ARYIUS9DLaCopRBsbTdZm1NEEPx3rnq659CiNOBDw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  range-parser@1.2.1:
    resolution: {integrity: sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==}
    engines: {node: '>= 0.6'}

  raw-body@2.5.2:
    resolution: {integrity: sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==}
    engines: {node: '>= 0.8'}

  react-datepicker@7.6.0:
    resolution: {integrity: sha512-9cQH6Z/qa4LrGhzdc3XoHbhrxNcMi9MKjZmYgF/1MNNaJwvdSjv3Xd+jjvrEEbKEf71ZgCA3n7fQbdwd70qCRw==}
    peerDependencies:
      react: ^16.9.0 || ^17 || ^18 || ^19 || ^19.0.0-rc
      react-dom: ^16.9.0 || ^17 || ^18 || ^19 || ^19.0.0-rc

  react-dom@18.2.0:
    resolution: {integrity: sha512-6IMTriUmvsjHUjNtEDudZfuDQUoWXVxKHhlEGSk81n4YFS+r/Kl99wXiwlVXtPBtJenozv2P+hxDsw9eA7Xo6g==}
    peerDependencies:
      react: ^18.2.0

  react-hook-form@7.54.2:
    resolution: {integrity: sha512-eHpAUgUjWbZocoQYUHposymRb4ZP6d0uwUnooL2uOybA9/3tPUvoAKqEWK1WaSiTxxOfTpffNZP7QwlnM3/gEg==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      react: ^16.8.0 || ^17 || ^18 || ^19

  react-hot-toast@2.5.2:
    resolution: {integrity: sha512-Tun3BbCxzmXXM7C+NI4qiv6lT0uwGh4oAfeJyNOjYUejTsm35mK9iCaYLGv8cBz9L5YxZLx/2ii7zsIwPtPUdw==}
    engines: {node: '>=10'}
    peerDependencies:
      react: '>=16'
      react-dom: '>=16'

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react-is@18.3.1:
    resolution: {integrity: sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==}

  react-query@3.39.3:
    resolution: {integrity: sha512-nLfLz7GiohKTJDuT4us4X3h/8unOh+00MLb2yJoGTPjxKs2bc1iDhkNx2bd5MKklXnOD3NrVZ+J2UXujA5In4g==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0
      react-dom: '*'
      react-native: '*'
    peerDependenciesMeta:
      react-dom:
        optional: true
      react-native:
        optional: true

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.6.3:
    resolution: {integrity: sha512-pnAi91oOk8g8ABQKGF5/M9qxmmOPxaAnopyTHYfqYEwJhyFrbbBtHuSgtKEoH0jpcxx5o3hXqH1mNd9/Oi+8iQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-smooth@4.0.4:
    resolution: {integrity: sha512-gnGKTpYwqL0Iii09gHobNolvX4Kiq4PKx6eWBCYYix+8cdw+cGo3do906l1NBPKkSWx1DghC1dlWG9L2uGd61Q==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-transition-group@4.4.5:
    resolution: {integrity: sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==}
    peerDependencies:
      react: '>=16.6.0'
      react-dom: '>=16.6.0'

  react@18.2.0:
    resolution: {integrity: sha512-/3IjMdb2L9QbBdWiW5e3P2/npwMBaU9mHCSCUzNln0ZCYbcfTsGbTJrU/kGemdH2IWmB2ioZ+zkxtmq6g09fGQ==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readable-stream@3.6.2:
    resolution: {integrity: sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==}
    engines: {node: '>= 6'}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  recharts-scale@0.4.5:
    resolution: {integrity: sha512-kivNFO+0OcUNu7jQquLXAxz1FIwZj8nrj+YkOKc5694NbjCvcT6aSZiIzNzd2Kul4o4rTto8QVR9lMNtxD4G1w==}

  recharts@2.15.1:
    resolution: {integrity: sha512-v8PUTUlyiDe56qUj82w/EDVuzEFXwEHp9/xOowGAZwfLjB9uAy3GllQVIYMWF6nU+qibx85WF75zD7AjqoT54Q==}
    engines: {node: '>=14'}
    peerDependencies:
      react: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  reflect.getprototypeof@1.0.10:
    resolution: {integrity: sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==}
    engines: {node: '>= 0.4'}

  regenerator-runtime@0.14.1:
    resolution: {integrity: sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==}

  regexp.prototype.flags@1.5.4:
    resolution: {integrity: sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==}
    engines: {node: '>= 0.4'}

  remove-accents@0.5.0:
    resolution: {integrity: sha512-8g3/Otx1eJaVD12e31UbJj1YzdtVvzH85HV7t+9MJYk/u3XmkOUJ5Ys9wQrf9PCPK8+xn4ymzqYCiZl6QWKn+A==}

  require-directory@2.1.1:
    resolution: {integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==}
    engines: {node: '>=0.10.0'}

  resolve-cwd@3.0.0:
    resolution: {integrity: sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==}
    engines: {node: '>=8'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-from@5.0.0:
    resolution: {integrity: sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==}
    engines: {node: '>=8'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  resolve.exports@2.0.3:
    resolution: {integrity: sha512-OcXjMsGdhL4XnbShKpAcSqPMzQoYkYyhbEaeSko47MjRP9NfEQMhZkXL1DoFlt9LWQn4YttrdnV6X2OiyzBi+A==}
    engines: {node: '>=10'}

  resolve@1.22.10:
    resolution: {integrity: sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==}
    engines: {node: '>= 0.4'}
    hasBin: true

  resolve@2.0.0-next.5:
    resolution: {integrity: sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==}
    hasBin: true

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rimraf@3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    deprecated: Rimraf versions prior to v4 are no longer supported
    hasBin: true

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-array-concat@1.1.3:
    resolution: {integrity: sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==}
    engines: {node: '>=0.4'}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  safe-push-apply@1.0.0:
    resolution: {integrity: sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==}
    engines: {node: '>= 0.4'}

  safe-regex-test@1.1.0:
    resolution: {integrity: sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==}
    engines: {node: '>= 0.4'}

  safer-buffer@2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  scheduler@0.23.2:
    resolution: {integrity: sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.7.1:
    resolution: {integrity: sha512-hlq8tAfn0m/61p4BVRcPzIGr6LKiMwo4VM6dGi6pt4qcRkmNzTcWq6eCEjEh+qXjkMDvPlOFFSGwQjoEa6gyMA==}
    engines: {node: '>=10'}
    hasBin: true

  send@0.19.0:
    resolution: {integrity: sha512-dW41u5VfLXu8SJh5bwRmyYUbAoSB3c9uQh6L8h/KtsFREPWpbX1lrljJo186Jc4nmci/sGUZ9a0a0J2zgfq2hw==}
    engines: {node: '>= 0.8.0'}

  serve-static@1.16.2:
    resolution: {integrity: sha512-VqpjJZKadQB/PEbEwvFdO43Ax5dFBZ2UECszz8bQ7pi7wt//PWe1P6MN7eCnjsatYtBT6EuiClbjSWP2WrIoTw==}
    engines: {node: '>= 0.8.0'}

  set-blocking@2.0.0:
    resolution: {integrity: sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==}

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  set-proto@1.0.0:
    resolution: {integrity: sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==}
    engines: {node: '>= 0.4'}

  setprototypeof@1.2.0:
    resolution: {integrity: sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==}

  sharp@0.33.5:
    resolution: {integrity: sha512-haPVm1EkS9pgvHrQ/F3Xy+hgcuMV0Wm9vfIBSiwZ05k+xgb0PkBQpGsAA/oWdDobNaZTH5ppvHtzCFbnSEwHVw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.0:
    resolution: {integrity: sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  simple-swizzle@0.2.2:
    resolution: {integrity: sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==}

  sisteransi@1.0.5:
    resolution: {integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==}

  slash@3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map-support@0.5.13:
    resolution: {integrity: sha512-SHSKFHadjVA5oR4PPqhtAVdcBWwRYVd6g6cAXnIbRiIwc2EhPrTuKUBdSLvlEKyIP3GCf89fltvcZiP9MMFA1w==}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  sprintf-js@1.0.3:
    resolution: {integrity: sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==}

  stable-hash@0.0.4:
    resolution: {integrity: sha512-LjdcbuBeLcdETCrPn9i8AYAZ1eCtu4ECAWtP7UleOiZ9LzVxRzzUZEoZ8zB24nhkQnDWyET0I+3sWokSDS3E7g==}

  stack-utils@2.0.6:
    resolution: {integrity: sha512-XlkWvfIm6RmsWtNJx+uqtKLS8eqFbxUg0ZzLXqY0caEy9l7hruX8IpiDnjsLavoBgqCCR71TqWO8MaXYheJ3RQ==}
    engines: {node: '>=10'}

  statuses@2.0.1:
    resolution: {integrity: sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==}
    engines: {node: '>= 0.8'}

  streamsearch@1.1.0:
    resolution: {integrity: sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==}
    engines: {node: '>=10.0.0'}

  string-length@4.0.2:
    resolution: {integrity: sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==}
    engines: {node: '>=10'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string.prototype.includes@2.0.1:
    resolution: {integrity: sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==}
    engines: {node: '>= 0.4'}

  string.prototype.matchall@4.0.12:
    resolution: {integrity: sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==}
    engines: {node: '>= 0.4'}

  string.prototype.repeat@1.0.0:
    resolution: {integrity: sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==}

  string.prototype.trim@1.2.10:
    resolution: {integrity: sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==}
    engines: {node: '>= 0.4'}

  string.prototype.trimend@1.0.9:
    resolution: {integrity: sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==}
    engines: {node: '>= 0.4'}

  string.prototype.trimstart@1.0.8:
    resolution: {integrity: sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==}
    engines: {node: '>= 0.4'}

  string_decoder@1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  strip-bom@3.0.0:
    resolution: {integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==}
    engines: {node: '>=4'}

  strip-bom@4.0.0:
    resolution: {integrity: sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==}
    engines: {node: '>=8'}

  strip-final-newline@2.0.0:
    resolution: {integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==}
    engines: {node: '>=6'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  stripe@14.25.0:
    resolution: {integrity: sha512-wQS3GNMofCXwH8TSje8E1SE8zr6ODiGtHQgPtO95p9Mb4FhKC9jvXR2NUTpZ9ZINlckJcFidCmaTFV4P6vsb9g==}
    engines: {node: '>=12.*'}

  styled-jsx@5.1.6:
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  sucrase@3.35.0:
    resolution: {integrity: sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  superjson@2.2.2:
    resolution: {integrity: sha512-5JRxVqC8I8NuOUjzBbvVJAKNM8qoVuH0O77h4WInc/qC2q5IreqKxYwgkga3PfA22OayK2ikceb/B26dztPl+Q==}
    engines: {node: '>=16'}

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-color@8.1.1:
    resolution: {integrity: sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==}
    engines: {node: '>=10'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  tabbable@6.2.0:
    resolution: {integrity: sha512-Cat63mxsVJlzYvN51JmVXIgNoUokrIaT2zLclCXjRd8boZ0004U4KCs/sToJ75C6sdlByWxpYnb5Boif1VSFew==}

  tailwind-merge@2.6.0:
    resolution: {integrity: sha512-P+Vu1qXfzediirmHOC3xKGAYeZtPcV9g76X+xg2FD4tYgR71ewMA35Y3sCz3zhiN/dwefRpJX0yBcgwi1fXNQA==}

  tailwindcss@3.4.17:
    resolution: {integrity: sha512-w33E2aCvSDP0tW9RZuNXadXlkHXqFzSkQew/aIa2i/Sj8fThxwovwlXHSPXTbAHwEIhBFXAedUhP2tueAKP8Og==}
    engines: {node: '>=14.0.0'}
    hasBin: true

  tapable@2.2.1:
    resolution: {integrity: sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==}
    engines: {node: '>=6'}

  tar@6.2.1:
    resolution: {integrity: sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==}
    engines: {node: '>=10'}

  test-exclude@6.0.0:
    resolution: {integrity: sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==}
    engines: {node: '>=8'}

  text-table@0.2.0:
    resolution: {integrity: sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==}

  thenify-all@1.6.0:
    resolution: {integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==}
    engines: {node: '>=0.8'}

  thenify@3.3.1:
    resolution: {integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==}

  tiny-invariant@1.3.3:
    resolution: {integrity: sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==}

  tinyglobby@0.2.12:
    resolution: {integrity: sha512-qkf4trmKSIiMTs/E63cxH+ojC2unam7rJ0WrauAzpT3ECNTxGRMlaXxVbfxMUC/w0LaYk6jQ4y/nGR9uBO3tww==}
    engines: {node: '>=12.0.0'}

  tmpl@1.0.5:
    resolution: {integrity: sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  toidentifier@1.0.1:
    resolution: {integrity: sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==}
    engines: {node: '>=0.6'}

  tr46@0.0.3:
    resolution: {integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==}

  trpc@0.11.3:
    resolution: {integrity: sha512-vfj6WrxYk8XDZzCsFNLwo5WhlKi4IYmVRzRgRQAlcK8zH4sY0yIAlJ7Nd1lZcGFe985GfP2LZLoEsCrMsIl/tA==}
    deprecated: superseded by @trpc/*-packages - see tRPC.io

  ts-api-utils@1.4.3:
    resolution: {integrity: sha512-i3eMG77UTMD0hZhgRS562pv83RC6ukSAC2GMNWc+9dieh/+jDM5u5YG+NHX6VNDRHQcHwmsTHctP9LhbC3WxVw==}
    engines: {node: '>=16'}
    peerDependencies:
      typescript: '>=4.2.0'

  ts-interface-checker@0.1.13:
    resolution: {integrity: sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==}

  ts-jest@29.2.6:
    resolution: {integrity: sha512-yTNZVZqc8lSixm+QGVFcPe6+yj7+TWZwIesuOWvfcn4B9bz5x4NDzVCQQjOs7Hfouu36aEqfEbo9Qpo+gq8dDg==}
    engines: {node: ^14.15.0 || ^16.10.0 || ^18.0.0 || >=20.0.0}
    hasBin: true
    peerDependencies:
      '@babel/core': '>=7.0.0-beta.0 <8'
      '@jest/transform': ^29.0.0
      '@jest/types': ^29.0.0
      babel-jest: ^29.0.0
      esbuild: '*'
      jest: ^29.0.0
      typescript: '>=4.3 <6'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      '@jest/transform':
        optional: true
      '@jest/types':
        optional: true
      babel-jest:
        optional: true
      esbuild:
        optional: true

  ts-node@10.9.2:
    resolution: {integrity: sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==}
    hasBin: true
    peerDependencies:
      '@swc/core': '>=1.2.50'
      '@swc/wasm': '>=1.2.50'
      '@types/node': '*'
      typescript: '>=2.7'
    peerDependenciesMeta:
      '@swc/core':
        optional: true
      '@swc/wasm':
        optional: true

  tsconfig-paths@3.15.0:
    resolution: {integrity: sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  type-check@0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}

  type-detect@4.0.8:
    resolution: {integrity: sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==}
    engines: {node: '>=4'}

  type-fest@0.20.2:
    resolution: {integrity: sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==}
    engines: {node: '>=10'}

  type-fest@0.21.3:
    resolution: {integrity: sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==}
    engines: {node: '>=10'}

  type-is@1.6.18:
    resolution: {integrity: sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==}
    engines: {node: '>= 0.6'}

  typed-array-buffer@1.0.3:
    resolution: {integrity: sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==}
    engines: {node: '>= 0.4'}

  typed-array-byte-length@1.0.3:
    resolution: {integrity: sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==}
    engines: {node: '>= 0.4'}

  typed-array-byte-offset@1.0.4:
    resolution: {integrity: sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==}
    engines: {node: '>= 0.4'}

  typed-array-length@1.0.7:
    resolution: {integrity: sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==}
    engines: {node: '>= 0.4'}

  typescript@5.8.2:
    resolution: {integrity: sha512-aJn6wq13/afZp/jT9QZmwEjDqqvSGp1VT5GVg+f/t6/oVyrgXM6BY1h9BRh/O5p3PlUPAe+WuiEZOmb/49RqoQ==}
    engines: {node: '>=14.17'}
    hasBin: true

  unbox-primitive@1.1.0:
    resolution: {integrity: sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==}
    engines: {node: '>= 0.4'}

  undici-types@6.20.0:
    resolution: {integrity: sha512-Ny6QZ2Nju20vw1SRHe3d9jVu6gJ+4e3+MMpqu7pqE5HT6WsTSlce++GQmK5UXS8mzV8DSYHrQH+Xrf2jVcuKNg==}

  unload@2.2.0:
    resolution: {integrity: sha512-B60uB5TNBLtN6/LsgAf3udH9saB5p7gqJwcFfbOEZ8BcBHnGwCf6G/TGiEqkRAxX7zAFIUtzdrXQSdL3Q/wqNA==}

  unpipe@1.0.0:
    resolution: {integrity: sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==}
    engines: {node: '>= 0.8'}

  update-browserslist-db@1.1.3:
    resolution: {integrity: sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  use-callback-ref@1.3.3:
    resolution: {integrity: sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.3:
    resolution: {integrity: sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sync-external-store@1.4.0:
    resolution: {integrity: sha512-9WXSPC5fMv61vaupRkCKCxsPxBocVnwakBEkMIHHpkTTg6icbJtg6jzgtLDm4bl3cSHAca52rYWih0k4K3PfHw==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  utils-merge@1.0.1:
    resolution: {integrity: sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==}
    engines: {node: '>= 0.4.0'}

  uuid@8.3.2:
    resolution: {integrity: sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==}
    hasBin: true

  v8-compile-cache-lib@3.0.1:
    resolution: {integrity: sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==}

  v8-to-istanbul@9.3.0:
    resolution: {integrity: sha512-kiGUalWN+rgBJ/1OHZsBtU4rXZOfj/7rKQxULKlIzwzQSvMJUUNgPwJEEh7gU6xEVxC0ahoOBvN2YI8GH6FNgA==}
    engines: {node: '>=10.12.0'}

  vary@1.1.2:
    resolution: {integrity: sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==}
    engines: {node: '>= 0.8'}

  victory-vendor@36.9.2:
    resolution: {integrity: sha512-PnpQQMuxlwYdocC8fIJqVXvkeViHYzotI+NJrCuav0ZYFoq912ZHBk3mCeuj+5/VpodOjPe1z0Fk2ihgzlXqjQ==}

  walker@1.0.8:
    resolution: {integrity: sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==}

  webidl-conversions@3.0.1:
    resolution: {integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==}

  whatwg-url@5.0.0:
    resolution: {integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==}

  which-boxed-primitive@1.1.1:
    resolution: {integrity: sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==}
    engines: {node: '>= 0.4'}

  which-builtin-type@1.2.1:
    resolution: {integrity: sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==}
    engines: {node: '>= 0.4'}

  which-collection@1.0.2:
    resolution: {integrity: sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==}
    engines: {node: '>= 0.4'}

  which-typed-array@1.1.18:
    resolution: {integrity: sha512-qEcY+KJYlWyLH9vNbsr6/5j59AXk5ni5aakf8ldzBvGde6Iz4sxZGkJyWSAueTG7QhOvNRYb1lDdFmL5Td0QKA==}
    engines: {node: '>= 0.4'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  wide-align@1.1.5:
    resolution: {integrity: sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==}

  word-wrap@1.2.5:
    resolution: {integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==}
    engines: {node: '>=0.10.0'}

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}

  wrappy@1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}

  write-file-atomic@4.0.2:
    resolution: {integrity: sha512-7KxauUdBmSdWnmpaGFg+ppNjKF8uNLry8LyzjauQDOVONfFLNKrKvQOxZ/VuTIcS/gge/YNahf5RIIQWTSarlg==}
    engines: {node: ^12.13.0 || ^14.15.0 || >=16.0.0}

  y18n@5.0.8:
    resolution: {integrity: sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==}
    engines: {node: '>=10'}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  yallist@4.0.0:
    resolution: {integrity: sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==}

  yaml@2.7.0:
    resolution: {integrity: sha512-+hSoy/QHluxmC9kCIJyL/uyFmLmc+e5CFR5Wa+bpIhIj85LVb9ZH2nVnqrHoSvKogwODv0ClqZkmiSSaIH5LTA==}
    engines: {node: '>= 14'}
    hasBin: true

  yargs-parser@21.1.1:
    resolution: {integrity: sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==}
    engines: {node: '>=12'}

  yargs@17.7.2:
    resolution: {integrity: sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==}
    engines: {node: '>=12'}

  yn@3.1.1:
    resolution: {integrity: sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==}
    engines: {node: '>=6'}

  yocto-queue@0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

  zod@3.24.2:
    resolution: {integrity: sha512-lY7CDW43ECgW9u1TcT3IoXHflywfVqDYze4waEz812jR/bZ8FHDsl7pFQoSZTz5N+2NqRXs8GBwnAwo3ZNxqhQ==}

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@ampproject/remapping@2.3.0':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.8
      '@jridgewell/trace-mapping': 0.3.25

  '@babel/code-frame@7.26.2':
    dependencies:
      '@babel/helper-validator-identifier': 7.25.9
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.26.8': {}

  '@babel/core@7.26.9':
    dependencies:
      '@ampproject/remapping': 2.3.0
      '@babel/code-frame': 7.26.2
      '@babel/generator': 7.26.9
      '@babel/helper-compilation-targets': 7.26.5
      '@babel/helper-module-transforms': 7.26.0(@babel/core@7.26.9)
      '@babel/helpers': 7.26.9
      '@babel/parser': 7.26.9
      '@babel/template': 7.26.9
      '@babel/traverse': 7.26.9
      '@babel/types': 7.26.9
      convert-source-map: 2.0.0
      debug: 4.4.0
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.26.9':
    dependencies:
      '@babel/parser': 7.26.9
      '@babel/types': 7.26.9
      '@jridgewell/gen-mapping': 0.3.8
      '@jridgewell/trace-mapping': 0.3.25
      jsesc: 3.1.0

  '@babel/helper-compilation-targets@7.26.5':
    dependencies:
      '@babel/compat-data': 7.26.8
      '@babel/helper-validator-option': 7.25.9
      browserslist: 4.24.4
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-module-imports@7.25.9':
    dependencies:
      '@babel/traverse': 7.26.9
      '@babel/types': 7.26.9
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.26.0(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-module-imports': 7.25.9
      '@babel/helper-validator-identifier': 7.25.9
      '@babel/traverse': 7.26.9
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-plugin-utils@7.26.5': {}

  '@babel/helper-string-parser@7.25.9': {}

  '@babel/helper-validator-identifier@7.25.9': {}

  '@babel/helper-validator-option@7.25.9': {}

  '@babel/helpers@7.26.9':
    dependencies:
      '@babel/template': 7.26.9
      '@babel/types': 7.26.9

  '@babel/parser@7.26.9':
    dependencies:
      '@babel/types': 7.26.9

  '@babel/plugin-syntax-async-generators@7.8.4(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-bigint@7.8.3(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-class-properties@7.12.13(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-class-static-block@7.14.5(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-import-attributes@7.26.0(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-import-meta@7.10.4(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-json-strings@7.8.3(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-jsx@7.25.9(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-logical-assignment-operators@7.10.4(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-nullish-coalescing-operator@7.8.3(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-numeric-separator@7.10.4(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-object-rest-spread@7.8.3(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-optional-catch-binding@7.8.3(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-optional-chaining@7.8.3(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-private-property-in-object@7.14.5(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-top-level-await@7.14.5(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/plugin-syntax-typescript@7.25.9(@babel/core@7.26.9)':
    dependencies:
      '@babel/core': 7.26.9
      '@babel/helper-plugin-utils': 7.26.5

  '@babel/runtime@7.26.9':
    dependencies:
      regenerator-runtime: 0.14.1

  '@babel/template@7.26.9':
    dependencies:
      '@babel/code-frame': 7.26.2
      '@babel/parser': 7.26.9
      '@babel/types': 7.26.9

  '@babel/traverse@7.26.9':
    dependencies:
      '@babel/code-frame': 7.26.2
      '@babel/generator': 7.26.9
      '@babel/parser': 7.26.9
      '@babel/template': 7.26.9
      '@babel/types': 7.26.9
      debug: 4.4.0
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.26.9':
    dependencies:
      '@babel/helper-string-parser': 7.25.9
      '@babel/helper-validator-identifier': 7.25.9

  '@bcoe/v8-coverage@0.2.3': {}

  '@cspotcode/source-map-support@0.8.1':
    dependencies:
      '@jridgewell/trace-mapping': 0.3.9

  '@emnapi/runtime@1.3.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@esbuild/aix-ppc64@0.25.0':
    optional: true

  '@esbuild/android-arm64@0.25.0':
    optional: true

  '@esbuild/android-arm@0.25.0':
    optional: true

  '@esbuild/android-x64@0.25.0':
    optional: true

  '@esbuild/darwin-arm64@0.25.0':
    optional: true

  '@esbuild/darwin-x64@0.25.0':
    optional: true

  '@esbuild/freebsd-arm64@0.25.0':
    optional: true

  '@esbuild/freebsd-x64@0.25.0':
    optional: true

  '@esbuild/linux-arm64@0.25.0':
    optional: true

  '@esbuild/linux-arm@0.25.0':
    optional: true

  '@esbuild/linux-ia32@0.25.0':
    optional: true

  '@esbuild/linux-loong64@0.25.0':
    optional: true

  '@esbuild/linux-mips64el@0.25.0':
    optional: true

  '@esbuild/linux-ppc64@0.25.0':
    optional: true

  '@esbuild/linux-riscv64@0.25.0':
    optional: true

  '@esbuild/linux-s390x@0.25.0':
    optional: true

  '@esbuild/linux-x64@0.25.0':
    optional: true

  '@esbuild/netbsd-arm64@0.25.0':
    optional: true

  '@esbuild/netbsd-x64@0.25.0':
    optional: true

  '@esbuild/openbsd-arm64@0.25.0':
    optional: true

  '@esbuild/openbsd-x64@0.25.0':
    optional: true

  '@esbuild/sunos-x64@0.25.0':
    optional: true

  '@esbuild/win32-arm64@0.25.0':
    optional: true

  '@esbuild/win32-ia32@0.25.0':
    optional: true

  '@esbuild/win32-x64@0.25.0':
    optional: true

  '@eslint-community/eslint-utils@4.4.1(eslint@8.57.1)':
    dependencies:
      eslint: 8.57.1
      eslint-visitor-keys: 3.4.3

  '@eslint-community/regexpp@4.12.1': {}

  '@eslint/eslintrc@2.1.4':
    dependencies:
      ajv: 6.12.6
      debug: 4.4.0
      espree: 9.6.1
      globals: 13.24.0
      ignore: 5.3.2
      import-fresh: 3.3.1
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  '@eslint/js@8.57.1': {}

  '@floating-ui/core@1.6.9':
    dependencies:
      '@floating-ui/utils': 0.2.9

  '@floating-ui/dom@1.6.13':
    dependencies:
      '@floating-ui/core': 1.6.9
      '@floating-ui/utils': 0.2.9

  '@floating-ui/react-dom@2.1.2(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@floating-ui/dom': 1.6.13
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)

  '@floating-ui/react@0.27.5(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@floating-ui/react-dom': 2.1.2(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@floating-ui/utils': 0.2.9
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      tabbable: 6.2.0

  '@floating-ui/utils@0.2.9': {}

  '@hookform/resolvers@3.10.0(react-hook-form@7.54.2(react@18.2.0))':
    dependencies:
      react-hook-form: 7.54.2(react@18.2.0)

  '@humanwhocodes/config-array@0.13.0':
    dependencies:
      '@humanwhocodes/object-schema': 2.0.3
      debug: 4.4.0
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color

  '@humanwhocodes/module-importer@1.0.1': {}

  '@humanwhocodes/object-schema@2.0.3': {}

  '@img/sharp-darwin-arm64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.0.4
    optional: true

  '@img/sharp-darwin-x64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.0.4
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.0.4':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.0.4':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.0.4':
    optional: true

  '@img/sharp-libvips-linux-arm@1.0.5':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.0.4':
    optional: true

  '@img/sharp-libvips-linux-x64@1.0.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.0.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.0.4':
    optional: true

  '@img/sharp-linux-arm64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.0.4
    optional: true

  '@img/sharp-linux-arm@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.0.5
    optional: true

  '@img/sharp-linux-s390x@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.0.4
    optional: true

  '@img/sharp-linux-x64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.0.4
    optional: true

  '@img/sharp-linuxmusl-arm64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.4
    optional: true

  '@img/sharp-linuxmusl-x64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.0.4
    optional: true

  '@img/sharp-wasm32@0.33.5':
    dependencies:
      '@emnapi/runtime': 1.3.1
    optional: true

  '@img/sharp-win32-ia32@0.33.5':
    optional: true

  '@img/sharp-win32-x64@0.33.5':
    optional: true

  '@isaacs/cliui@8.0.2':
    dependencies:
      string-width: 5.1.2
      string-width-cjs: string-width@4.2.3
      strip-ansi: 7.1.0
      strip-ansi-cjs: strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: wrap-ansi@7.0.0

  '@istanbuljs/load-nyc-config@1.1.0':
    dependencies:
      camelcase: 5.3.1
      find-up: 4.1.0
      get-package-type: 0.1.0
      js-yaml: 3.14.1
      resolve-from: 5.0.0

  '@istanbuljs/schema@0.1.3': {}

  '@jest/console@29.7.0':
    dependencies:
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      chalk: 4.1.2
      jest-message-util: 29.7.0
      jest-util: 29.7.0
      slash: 3.0.0

  '@jest/core@29.7.0(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))':
    dependencies:
      '@jest/console': 29.7.0
      '@jest/reporters': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      ci-info: 3.9.0
      exit: 0.1.2
      graceful-fs: 4.2.11
      jest-changed-files: 29.7.0
      jest-config: 29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      jest-haste-map: 29.7.0
      jest-message-util: 29.7.0
      jest-regex-util: 29.6.3
      jest-resolve: 29.7.0
      jest-resolve-dependencies: 29.7.0
      jest-runner: 29.7.0
      jest-runtime: 29.7.0
      jest-snapshot: 29.7.0
      jest-util: 29.7.0
      jest-validate: 29.7.0
      jest-watcher: 29.7.0
      micromatch: 4.0.8
      pretty-format: 29.7.0
      slash: 3.0.0
      strip-ansi: 6.0.1
    transitivePeerDependencies:
      - babel-plugin-macros
      - supports-color
      - ts-node

  '@jest/environment@29.7.0':
    dependencies:
      '@jest/fake-timers': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      jest-mock: 29.7.0

  '@jest/expect-utils@29.7.0':
    dependencies:
      jest-get-type: 29.6.3

  '@jest/expect@29.7.0':
    dependencies:
      expect: 29.7.0
      jest-snapshot: 29.7.0
    transitivePeerDependencies:
      - supports-color

  '@jest/fake-timers@29.7.0':
    dependencies:
      '@jest/types': 29.6.3
      '@sinonjs/fake-timers': 10.3.0
      '@types/node': 22.13.9
      jest-message-util: 29.7.0
      jest-mock: 29.7.0
      jest-util: 29.7.0

  '@jest/globals@29.7.0':
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/expect': 29.7.0
      '@jest/types': 29.6.3
      jest-mock: 29.7.0
    transitivePeerDependencies:
      - supports-color

  '@jest/reporters@29.7.0':
    dependencies:
      '@bcoe/v8-coverage': 0.2.3
      '@jest/console': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@jridgewell/trace-mapping': 0.3.25
      '@types/node': 22.13.9
      chalk: 4.1.2
      collect-v8-coverage: 1.0.2
      exit: 0.1.2
      glob: 7.2.3
      graceful-fs: 4.2.11
      istanbul-lib-coverage: 3.2.2
      istanbul-lib-instrument: 6.0.3
      istanbul-lib-report: 3.0.1
      istanbul-lib-source-maps: 4.0.1
      istanbul-reports: 3.1.7
      jest-message-util: 29.7.0
      jest-util: 29.7.0
      jest-worker: 29.7.0
      slash: 3.0.0
      string-length: 4.0.2
      strip-ansi: 6.0.1
      v8-to-istanbul: 9.3.0
    transitivePeerDependencies:
      - supports-color

  '@jest/schemas@29.6.3':
    dependencies:
      '@sinclair/typebox': 0.27.8

  '@jest/source-map@29.6.3':
    dependencies:
      '@jridgewell/trace-mapping': 0.3.25
      callsites: 3.1.0
      graceful-fs: 4.2.11

  '@jest/test-result@29.7.0':
    dependencies:
      '@jest/console': 29.7.0
      '@jest/types': 29.6.3
      '@types/istanbul-lib-coverage': 2.0.6
      collect-v8-coverage: 1.0.2

  '@jest/test-sequencer@29.7.0':
    dependencies:
      '@jest/test-result': 29.7.0
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      slash: 3.0.0

  '@jest/transform@29.7.0':
    dependencies:
      '@babel/core': 7.26.9
      '@jest/types': 29.6.3
      '@jridgewell/trace-mapping': 0.3.25
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 2.0.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      jest-regex-util: 29.6.3
      jest-util: 29.7.0
      micromatch: 4.0.8
      pirates: 4.0.6
      slash: 3.0.0
      write-file-atomic: 4.0.2
    transitivePeerDependencies:
      - supports-color

  '@jest/types@29.6.3':
    dependencies:
      '@jest/schemas': 29.6.3
      '@types/istanbul-lib-coverage': 2.0.6
      '@types/istanbul-reports': 3.0.4
      '@types/node': 22.13.9
      '@types/yargs': 17.0.33
      chalk: 4.1.2

  '@jridgewell/gen-mapping@0.3.8':
    dependencies:
      '@jridgewell/set-array': 1.2.1
      '@jridgewell/sourcemap-codec': 1.5.0
      '@jridgewell/trace-mapping': 0.3.25

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/set-array@1.2.1': {}

  '@jridgewell/sourcemap-codec@1.5.0': {}

  '@jridgewell/trace-mapping@0.3.25':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.0

  '@jridgewell/trace-mapping@0.3.9':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.0

  '@mapbox/node-pre-gyp@1.0.11':
    dependencies:
      detect-libc: 2.0.3
      https-proxy-agent: 5.0.1
      make-dir: 3.1.0
      node-fetch: 2.7.0
      nopt: 5.0.0
      npmlog: 5.0.1
      rimraf: 3.0.2
      semver: 7.7.1
      tar: 6.2.1
    transitivePeerDependencies:
      - encoding
      - supports-color

  '@next-auth/prisma-adapter@1.0.7(@prisma/client@6.4.1(prisma@6.4.1(typescript@5.8.2))(typescript@5.8.2))(next-auth@4.24.11(next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react-dom@18.2.0(react@18.2.0))(react@18.2.0))':
    dependencies:
      '@prisma/client': 6.4.1(prisma@6.4.1(typescript@5.8.2))(typescript@5.8.2)
      next-auth: 4.24.11(next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react-dom@18.2.0(react@18.2.0))(react@18.2.0)

  '@next/env@15.2.1': {}

  '@next/eslint-plugin-next@14.2.24':
    dependencies:
      glob: 10.3.10

  '@next/swc-darwin-arm64@15.2.1':
    optional: true

  '@next/swc-darwin-x64@15.2.1':
    optional: true

  '@next/swc-linux-arm64-gnu@15.2.1':
    optional: true

  '@next/swc-linux-arm64-musl@15.2.1':
    optional: true

  '@next/swc-linux-x64-gnu@15.2.1':
    optional: true

  '@next/swc-linux-x64-musl@15.2.1':
    optional: true

  '@next/swc-win32-arm64-msvc@15.2.1':
    optional: true

  '@next/swc-win32-x64-msvc@15.2.1':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.19.1

  '@nolyfill/is-core-module@1.0.39': {}

  '@panva/hkdf@1.2.1': {}

  '@pkgjs/parseargs@0.11.0':
    optional: true

  '@prisma/client@6.4.1(prisma@6.4.1(typescript@5.8.2))(typescript@5.8.2)':
    optionalDependencies:
      prisma: 6.4.1(typescript@5.8.2)
      typescript: 5.8.2

  '@prisma/debug@6.4.1': {}

  '@prisma/engines-version@6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d': {}

  '@prisma/engines@6.4.1':
    dependencies:
      '@prisma/debug': 6.4.1
      '@prisma/engines-version': 6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d
      '@prisma/fetch-engine': 6.4.1
      '@prisma/get-platform': 6.4.1

  '@prisma/fetch-engine@6.4.1':
    dependencies:
      '@prisma/debug': 6.4.1
      '@prisma/engines-version': 6.4.0-29.a9055b89e58b4b5bfb59600785423b1db3d0e75d
      '@prisma/get-platform': 6.4.1

  '@prisma/get-platform@6.4.1':
    dependencies:
      '@prisma/debug': 6.4.1

  '@radix-ui/number@1.1.0': {}

  '@radix-ui/primitive@1.1.1': {}

  '@radix-ui/react-accessible-icon@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-visually-hidden': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-accordion@1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collapsible': 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-alert-dialog@1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dialog': 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-arrow@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-aspect-ratio@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-avatar@1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-checkbox@1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-collapsible@1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-collection@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-compose-refs@1.1.1(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-context-menu@2.2.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-menu': 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-context@1.1.1(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-dialog@1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-focus-scope': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      aria-hidden: 1.2.4
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      react-remove-scroll: 2.6.3(@types/react@18.3.18)(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-direction@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-dismissable-layer@1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-escape-keydown': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-dropdown-menu@2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-menu': 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-focus-guards@1.1.1(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-focus-scope@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-form@0.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-label': 2.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-hover-card@1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-popper': 1.2.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-icons@1.3.2(react@18.2.0)':
    dependencies:
      react: 18.2.0

  '@radix-ui/react-id@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-label@2.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-menu@2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-focus-scope': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-popper': 1.2.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      aria-hidden: 1.2.4
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      react-remove-scroll: 2.6.3(@types/react@18.3.18)(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-menubar@1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-menu': 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-navigation-menu@1.2.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-visually-hidden': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-popover@1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-focus-scope': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-popper': 1.2.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      aria-hidden: 1.2.4
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      react-remove-scroll: 2.6.3(@types/react@18.3.18)(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-popper@1.2.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@floating-ui/react-dom': 2.1.2(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-arrow': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-rect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/rect': 1.1.0
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-portal@1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-presence@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-primitive@2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-progress@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-radio-group@1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-roving-focus@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-scroll-area@1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/number': 1.1.0
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-select@2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/number': 1.1.0
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-focus-scope': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-popper': 1.2.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-visually-hidden': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      aria-hidden: 1.2.4
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      react-remove-scroll: 2.6.3(@types/react@18.3.18)(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-separator@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-slider@1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/number': 1.1.0
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-slot@1.1.2(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-switch@1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-tabs@1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-toast@1.2.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-visually-hidden': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-toggle-group@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-toggle': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-toggle@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-toolbar@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-separator': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-toggle-group': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-tooltip@1.1.8(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-popper': 1.2.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-visually-hidden': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/react-use-callback-ref@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-use-controllable-state@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-use-escape-keydown@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-use-layout-effect@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-use-previous@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-use-rect@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      '@radix-ui/rect': 1.1.0
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-use-size@1.1.0(@types/react@18.3.18)(react@18.2.0)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      react: 18.2.0
    optionalDependencies:
      '@types/react': 18.3.18

  '@radix-ui/react-visually-hidden@1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  '@radix-ui/rect@1.1.0': {}

  '@rtsao/scc@1.1.0': {}

  '@rushstack/eslint-patch@1.10.5': {}

  '@sinclair/typebox@0.27.8': {}

  '@sinonjs/commons@3.0.1':
    dependencies:
      type-detect: 4.0.8

  '@sinonjs/fake-timers@10.3.0':
    dependencies:
      '@sinonjs/commons': 3.0.1

  '@stripe/react-stripe-js@3.3.0(@stripe/stripe-js@5.8.0)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@stripe/stripe-js': 5.8.0
      prop-types: 15.8.1
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)

  '@stripe/stripe-js@5.8.0': {}

  '@swc/counter@0.1.3': {}

  '@swc/helpers@0.5.15':
    dependencies:
      tslib: 2.8.1

  '@tanstack/query-core@4.36.1': {}

  '@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@tanstack/query-core': 4.36.1
      react: 18.2.0
      use-sync-external-store: 1.4.0(react@18.2.0)
    optionalDependencies:
      react-dom: 18.2.0(react@18.2.0)

  '@trpc/client@10.45.2(@trpc/server@10.45.2)':
    dependencies:
      '@trpc/server': 10.45.2

  '@trpc/next@10.45.2(@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/react-query@10.45.2(@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/server@10.45.2)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/server@10.45.2)(next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@tanstack/react-query': 4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@trpc/client': 10.45.2(@trpc/server@10.45.2)
      '@trpc/react-query': 10.45.2(@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/server@10.45.2)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@trpc/server': 10.45.2
      next: 15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)

  '@trpc/react-query@10.45.2(@tanstack/react-query@4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/server@10.45.2)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@tanstack/react-query': 4.36.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@trpc/client': 10.45.2(@trpc/server@10.45.2)
      '@trpc/server': 10.45.2
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)

  '@trpc/react@9.27.4(@trpc/client@10.45.2(@trpc/server@10.45.2))(@trpc/server@10.45.2)(react-dom@18.2.0(react@18.2.0))(react-query@3.39.3(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react@18.2.0)':
    dependencies:
      '@babel/runtime': 7.26.9
      '@trpc/client': 10.45.2(@trpc/server@10.45.2)
      '@trpc/server': 10.45.2
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      react-query: 3.39.3(react-dom@18.2.0(react@18.2.0))(react@18.2.0)

  '@trpc/server@10.45.2': {}

  '@tsconfig/node10@1.0.11': {}

  '@tsconfig/node12@1.0.11': {}

  '@tsconfig/node14@1.0.3': {}

  '@tsconfig/node16@1.0.4': {}

  '@types/babel__core@7.20.5':
    dependencies:
      '@babel/parser': 7.26.9
      '@babel/types': 7.26.9
      '@types/babel__generator': 7.6.8
      '@types/babel__template': 7.4.4
      '@types/babel__traverse': 7.20.6

  '@types/babel__generator@7.6.8':
    dependencies:
      '@babel/types': 7.26.9

  '@types/babel__template@7.4.4':
    dependencies:
      '@babel/parser': 7.26.9
      '@babel/types': 7.26.9

  '@types/babel__traverse@7.20.6':
    dependencies:
      '@babel/types': 7.26.9

  '@types/bcrypt@5.0.2':
    dependencies:
      '@types/node': 22.13.9

  '@types/bcryptjs@2.4.6': {}

  '@types/d3-array@3.2.1': {}

  '@types/d3-color@3.1.3': {}

  '@types/d3-ease@3.0.2': {}

  '@types/d3-interpolate@3.0.4':
    dependencies:
      '@types/d3-color': 3.1.3

  '@types/d3-path@3.1.1': {}

  '@types/d3-scale@4.0.9':
    dependencies:
      '@types/d3-time': 3.0.4

  '@types/d3-shape@3.1.7':
    dependencies:
      '@types/d3-path': 3.1.1

  '@types/d3-time@3.0.4': {}

  '@types/d3-timer@3.0.2': {}

  '@types/eslint@8.56.12':
    dependencies:
      '@types/estree': 1.0.6
      '@types/json-schema': 7.0.15

  '@types/estree@1.0.6': {}

  '@types/graceful-fs@4.1.9':
    dependencies:
      '@types/node': 22.13.9

  '@types/istanbul-lib-coverage@2.0.6': {}

  '@types/istanbul-lib-report@3.0.3':
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.6

  '@types/istanbul-reports@3.0.4':
    dependencies:
      '@types/istanbul-lib-report': 3.0.3

  '@types/jest@29.5.14':
    dependencies:
      expect: 29.7.0
      pretty-format: 29.7.0

  '@types/json-schema@7.0.15': {}

  '@types/json5@0.0.29': {}

  '@types/node@22.13.9':
    dependencies:
      undici-types: 6.20.0

  '@types/prop-types@15.7.14': {}

  '@types/react-datepicker@7.0.0(react-dom@18.2.0(react@18.2.0))(react@18.2.0)':
    dependencies:
      react-datepicker: 7.6.0(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
    transitivePeerDependencies:
      - react
      - react-dom

  '@types/react-dom@18.3.5(@types/react@18.3.18)':
    dependencies:
      '@types/react': 18.3.18

  '@types/react@18.3.18':
    dependencies:
      '@types/prop-types': 15.7.14
      csstype: 3.1.3

  '@types/semver@7.5.8': {}

  '@types/stack-utils@2.0.3': {}

  '@types/yargs-parser@21.0.3': {}

  '@types/yargs@17.0.33':
    dependencies:
      '@types/yargs-parser': 21.0.3

  '@typescript-eslint/eslint-plugin@6.21.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint@8.57.1)(typescript@5.8.2)':
    dependencies:
      '@eslint-community/regexpp': 4.12.1
      '@typescript-eslint/parser': 6.21.0(eslint@8.57.1)(typescript@5.8.2)
      '@typescript-eslint/scope-manager': 6.21.0
      '@typescript-eslint/type-utils': 6.21.0(eslint@8.57.1)(typescript@5.8.2)
      '@typescript-eslint/utils': 6.21.0(eslint@8.57.1)(typescript@5.8.2)
      '@typescript-eslint/visitor-keys': 6.21.0
      debug: 4.4.0
      eslint: 8.57.1
      graphemer: 1.4.0
      ignore: 5.3.2
      natural-compare: 1.4.0
      semver: 7.7.1
      ts-api-utils: 1.4.3(typescript@5.8.2)
    optionalDependencies:
      typescript: 5.8.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2)':
    dependencies:
      '@typescript-eslint/scope-manager': 6.21.0
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/typescript-estree': 6.21.0(typescript@5.8.2)
      '@typescript-eslint/visitor-keys': 6.21.0
      debug: 4.4.0
      eslint: 8.57.1
    optionalDependencies:
      typescript: 5.8.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@6.21.0':
    dependencies:
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/visitor-keys': 6.21.0

  '@typescript-eslint/type-utils@6.21.0(eslint@8.57.1)(typescript@5.8.2)':
    dependencies:
      '@typescript-eslint/typescript-estree': 6.21.0(typescript@5.8.2)
      '@typescript-eslint/utils': 6.21.0(eslint@8.57.1)(typescript@5.8.2)
      debug: 4.4.0
      eslint: 8.57.1
      ts-api-utils: 1.4.3(typescript@5.8.2)
    optionalDependencies:
      typescript: 5.8.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/types@6.21.0': {}

  '@typescript-eslint/typescript-estree@6.21.0(typescript@5.8.2)':
    dependencies:
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/visitor-keys': 6.21.0
      debug: 4.4.0
      globby: 11.1.0
      is-glob: 4.0.3
      minimatch: 9.0.3
      semver: 7.7.1
      ts-api-utils: 1.4.3(typescript@5.8.2)
    optionalDependencies:
      typescript: 5.8.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/utils@6.21.0(eslint@8.57.1)(typescript@5.8.2)':
    dependencies:
      '@eslint-community/eslint-utils': 4.4.1(eslint@8.57.1)
      '@types/json-schema': 7.0.15
      '@types/semver': 7.5.8
      '@typescript-eslint/scope-manager': 6.21.0
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/typescript-estree': 6.21.0(typescript@5.8.2)
      eslint: 8.57.1
      semver: 7.7.1
    transitivePeerDependencies:
      - supports-color
      - typescript

  '@typescript-eslint/visitor-keys@6.21.0':
    dependencies:
      '@typescript-eslint/types': 6.21.0
      eslint-visitor-keys: 3.4.3

  '@ungap/structured-clone@1.3.0': {}

  abbrev@1.1.1: {}

  accepts@1.3.8:
    dependencies:
      mime-types: 2.1.35
      negotiator: 0.6.3

  acorn-jsx@5.3.2(acorn@8.14.0):
    dependencies:
      acorn: 8.14.0

  acorn-walk@8.3.4:
    dependencies:
      acorn: 8.14.0

  acorn@8.14.0: {}

  agent-base@6.0.2:
    dependencies:
      debug: 4.4.0
    transitivePeerDependencies:
      - supports-color

  ajv@6.12.6:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ansi-escapes@4.3.2:
    dependencies:
      type-fest: 0.21.3

  ansi-regex@5.0.1: {}

  ansi-regex@6.1.0: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  ansi-styles@5.2.0: {}

  ansi-styles@6.2.1: {}

  any-promise@1.3.0: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  aproba@2.0.0: {}

  are-we-there-yet@2.0.0:
    dependencies:
      delegates: 1.0.0
      readable-stream: 3.6.2

  arg@4.1.3: {}

  arg@5.0.2: {}

  argparse@1.0.10:
    dependencies:
      sprintf-js: 1.0.3

  argparse@2.0.1: {}

  aria-hidden@1.2.4:
    dependencies:
      tslib: 2.8.1

  aria-query@5.3.2: {}

  array-buffer-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      is-array-buffer: 3.0.5

  array-flatten@1.1.1: {}

  array-includes@3.1.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      is-string: 1.1.1

  array-union@2.1.0: {}

  array.prototype.findlast@1.2.5:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.findlastindex@1.2.5:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.flat@1.3.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-shim-unscopables: 1.1.0

  array.prototype.flatmap@1.3.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-shim-unscopables: 1.1.0

  array.prototype.tosorted@1.1.4:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-errors: 1.3.0
      es-shim-unscopables: 1.1.0

  arraybuffer.prototype.slice@1.0.4:
    dependencies:
      array-buffer-byte-length: 1.0.2
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      is-array-buffer: 3.0.5

  ast-types-flow@0.0.8: {}

  async-function@1.0.0: {}

  async@3.2.6: {}

  autoprefixer@10.4.20(postcss@8.5.3):
    dependencies:
      browserslist: 4.24.4
      caniuse-lite: 1.0.30001702
      fraction.js: 4.3.7
      normalize-range: 0.1.2
      picocolors: 1.1.1
      postcss: 8.5.3
      postcss-value-parser: 4.2.0

  available-typed-arrays@1.0.7:
    dependencies:
      possible-typed-array-names: 1.1.0

  axe-core@4.10.2: {}

  axios@0.19.2:
    dependencies:
      follow-redirects: 1.5.10
    transitivePeerDependencies:
      - supports-color

  axobject-query@4.1.0: {}

  babel-jest@29.7.0(@babel/core@7.26.9):
    dependencies:
      '@babel/core': 7.26.9
      '@jest/transform': 29.7.0
      '@types/babel__core': 7.20.5
      babel-plugin-istanbul: 6.1.1
      babel-preset-jest: 29.6.3(@babel/core@7.26.9)
      chalk: 4.1.2
      graceful-fs: 4.2.11
      slash: 3.0.0
    transitivePeerDependencies:
      - supports-color

  babel-plugin-istanbul@6.1.1:
    dependencies:
      '@babel/helper-plugin-utils': 7.26.5
      '@istanbuljs/load-nyc-config': 1.1.0
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-instrument: 5.2.1
      test-exclude: 6.0.0
    transitivePeerDependencies:
      - supports-color

  babel-plugin-jest-hoist@29.6.3:
    dependencies:
      '@babel/template': 7.26.9
      '@babel/types': 7.26.9
      '@types/babel__core': 7.20.5
      '@types/babel__traverse': 7.20.6

  babel-preset-current-node-syntax@1.1.0(@babel/core@7.26.9):
    dependencies:
      '@babel/core': 7.26.9
      '@babel/plugin-syntax-async-generators': 7.8.4(@babel/core@7.26.9)
      '@babel/plugin-syntax-bigint': 7.8.3(@babel/core@7.26.9)
      '@babel/plugin-syntax-class-properties': 7.12.13(@babel/core@7.26.9)
      '@babel/plugin-syntax-class-static-block': 7.14.5(@babel/core@7.26.9)
      '@babel/plugin-syntax-import-attributes': 7.26.0(@babel/core@7.26.9)
      '@babel/plugin-syntax-import-meta': 7.10.4(@babel/core@7.26.9)
      '@babel/plugin-syntax-json-strings': 7.8.3(@babel/core@7.26.9)
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4(@babel/core@7.26.9)
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3(@babel/core@7.26.9)
      '@babel/plugin-syntax-numeric-separator': 7.10.4(@babel/core@7.26.9)
      '@babel/plugin-syntax-object-rest-spread': 7.8.3(@babel/core@7.26.9)
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3(@babel/core@7.26.9)
      '@babel/plugin-syntax-optional-chaining': 7.8.3(@babel/core@7.26.9)
      '@babel/plugin-syntax-private-property-in-object': 7.14.5(@babel/core@7.26.9)
      '@babel/plugin-syntax-top-level-await': 7.14.5(@babel/core@7.26.9)

  babel-preset-jest@29.6.3(@babel/core@7.26.9):
    dependencies:
      '@babel/core': 7.26.9
      babel-plugin-jest-hoist: 29.6.3
      babel-preset-current-node-syntax: 1.1.0(@babel/core@7.26.9)

  balanced-match@1.0.2: {}

  bcrypt@5.1.1:
    dependencies:
      '@mapbox/node-pre-gyp': 1.0.11
      node-addon-api: 5.1.0
    transitivePeerDependencies:
      - encoding
      - supports-color

  bcryptjs@2.4.3: {}

  big-integer@1.6.52: {}

  binary-extensions@2.3.0: {}

  body-parser@1.20.3:
    dependencies:
      bytes: 3.1.2
      content-type: 1.0.5
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      on-finished: 2.4.1
      qs: 6.13.0
      raw-body: 2.5.2
      type-is: 1.6.18
      unpipe: 1.0.0
    transitivePeerDependencies:
      - supports-color

  brace-expansion@1.1.11:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.0.1:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  broadcast-channel@3.7.0:
    dependencies:
      '@babel/runtime': 7.26.9
      detect-node: 2.1.0
      js-sha3: 0.8.0
      microseconds: 0.2.0
      nano-time: 1.0.0
      oblivious-set: 1.0.0
      rimraf: 3.0.2
      unload: 2.2.0

  browserslist@4.24.4:
    dependencies:
      caniuse-lite: 1.0.30001702
      electron-to-chromium: 1.5.112
      node-releases: 2.0.19
      update-browserslist-db: 1.1.3(browserslist@4.24.4)

  bs-logger@0.2.6:
    dependencies:
      fast-json-stable-stringify: 2.1.0

  bser@2.1.1:
    dependencies:
      node-int64: 0.4.0

  buffer-from@1.1.2: {}

  busboy@1.6.0:
    dependencies:
      streamsearch: 1.1.0

  bytes@3.1.2: {}

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bind@1.0.8:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      get-intrinsic: 1.3.0
      set-function-length: 1.2.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  camelcase-css@2.0.1: {}

  camelcase@5.3.1: {}

  camelcase@6.3.0: {}

  caniuse-lite@1.0.30001702: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  char-regex@1.0.2: {}

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  chownr@2.0.0: {}

  ci-info@3.9.0: {}

  cjs-module-lexer@1.4.3: {}

  class-variance-authority@0.7.1:
    dependencies:
      clsx: 2.1.1

  client-only@0.0.1: {}

  cliui@8.0.1:
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 7.0.0

  clsx@2.1.1: {}

  co@4.6.0: {}

  collect-v8-coverage@1.0.2: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  color-string@1.9.1:
    dependencies:
      color-name: 1.1.4
      simple-swizzle: 0.2.2
    optional: true

  color-support@1.1.3: {}

  color@4.2.3:
    dependencies:
      color-convert: 2.0.1
      color-string: 1.9.1
    optional: true

  commander@4.1.1: {}

  concat-map@0.0.1: {}

  console-control-strings@1.1.0: {}

  content-disposition@0.5.4:
    dependencies:
      safe-buffer: 5.2.1

  content-type@1.0.5: {}

  convert-source-map@2.0.0: {}

  cookie-signature@1.0.6: {}

  cookie@0.7.1: {}

  cookie@0.7.2: {}

  copy-anything@3.0.5:
    dependencies:
      is-what: 4.1.16

  create-jest@29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)):
    dependencies:
      '@jest/types': 29.6.3
      chalk: 4.1.2
      exit: 0.1.2
      graceful-fs: 4.2.11
      jest-config: 29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      jest-util: 29.7.0
      prompts: 2.4.2
    transitivePeerDependencies:
      - '@types/node'
      - babel-plugin-macros
      - supports-color
      - ts-node

  create-require@1.1.1: {}

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  cssesc@3.0.0: {}

  csstype@3.1.3: {}

  d3-array@3.2.4:
    dependencies:
      internmap: 2.0.3

  d3-color@3.1.0: {}

  d3-ease@3.0.1: {}

  d3-format@3.1.0: {}

  d3-interpolate@3.0.1:
    dependencies:
      d3-color: 3.1.0

  d3-path@3.1.0: {}

  d3-scale@4.0.2:
    dependencies:
      d3-array: 3.2.4
      d3-format: 3.1.0
      d3-interpolate: 3.0.1
      d3-time: 3.1.0
      d3-time-format: 4.1.0

  d3-shape@3.2.0:
    dependencies:
      d3-path: 3.1.0

  d3-time-format@4.1.0:
    dependencies:
      d3-time: 3.1.0

  d3-time@3.1.0:
    dependencies:
      d3-array: 3.2.4

  d3-timer@3.0.1: {}

  damerau-levenshtein@1.0.8: {}

  data-view-buffer@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-offset@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  date-fns@3.6.0: {}

  date-fns@4.1.0: {}

  debug@2.6.9:
    dependencies:
      ms: 2.0.0

  debug@3.1.0:
    dependencies:
      ms: 2.0.0

  debug@3.2.7:
    dependencies:
      ms: 2.1.3

  debug@4.4.0:
    dependencies:
      ms: 2.1.3

  decimal.js-light@2.5.1: {}

  dedent@1.5.3: {}

  deep-is@0.1.4: {}

  deepmerge@4.3.1: {}

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.1
      es-errors: 1.3.0
      gopd: 1.2.0

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  delegates@1.0.0: {}

  depd@2.0.0: {}

  destroy@1.2.0: {}

  detect-libc@2.0.3: {}

  detect-newline@3.1.0: {}

  detect-node-es@1.1.0: {}

  detect-node@2.1.0: {}

  didyoumean@1.2.2: {}

  diff-sequences@29.6.3: {}

  diff@4.0.2: {}

  dir-glob@3.0.1:
    dependencies:
      path-type: 4.0.0

  dlv@1.1.3: {}

  doctrine@2.1.0:
    dependencies:
      esutils: 2.0.3

  doctrine@3.0.0:
    dependencies:
      esutils: 2.0.3

  dom-helpers@5.2.1:
    dependencies:
      '@babel/runtime': 7.26.9
      csstype: 3.1.3

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  eastasianwidth@0.2.0: {}

  ee-first@1.1.1: {}

  ejs@3.1.10:
    dependencies:
      jake: 10.9.2

  electron-to-chromium@1.5.112: {}

  emittery@0.13.1: {}

  emoji-regex@8.0.0: {}

  emoji-regex@9.2.2: {}

  encodeurl@1.0.2: {}

  encodeurl@2.0.0: {}

  enhanced-resolve@5.18.1:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.2.1

  error-ex@1.3.2:
    dependencies:
      is-arrayish: 0.2.1

  es-abstract@1.23.9:
    dependencies:
      array-buffer-byte-length: 1.0.2
      arraybuffer.prototype.slice: 1.0.4
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      call-bound: 1.0.4
      data-view-buffer: 1.0.2
      data-view-byte-length: 1.0.2
      data-view-byte-offset: 1.0.1
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-set-tostringtag: 2.1.0
      es-to-primitive: 1.3.0
      function.prototype.name: 1.1.8
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      get-symbol-description: 1.1.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.2
      internal-slot: 1.1.0
      is-array-buffer: 3.0.5
      is-callable: 1.2.7
      is-data-view: 1.0.2
      is-regex: 1.2.1
      is-shared-array-buffer: 1.0.4
      is-string: 1.1.1
      is-typed-array: 1.1.15
      is-weakref: 1.1.1
      math-intrinsics: 1.1.0
      object-inspect: 1.13.4
      object-keys: 1.1.1
      object.assign: 4.1.7
      own-keys: 1.0.1
      regexp.prototype.flags: 1.5.4
      safe-array-concat: 1.1.3
      safe-push-apply: 1.0.0
      safe-regex-test: 1.1.0
      set-proto: 1.0.0
      string.prototype.trim: 1.2.10
      string.prototype.trimend: 1.0.9
      string.prototype.trimstart: 1.0.8
      typed-array-buffer: 1.0.3
      typed-array-byte-length: 1.0.3
      typed-array-byte-offset: 1.0.4
      typed-array-length: 1.0.7
      unbox-primitive: 1.1.0
      which-typed-array: 1.1.18

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-iterator-helpers@1.2.1:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-errors: 1.3.0
      es-set-tostringtag: 2.1.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      iterator.prototype: 1.1.5
      safe-array-concat: 1.1.3

  es-object-atoms@1.1.1:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.1.0:
    dependencies:
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  es-shim-unscopables@1.1.0:
    dependencies:
      hasown: 2.0.2

  es-to-primitive@1.3.0:
    dependencies:
      is-callable: 1.2.7
      is-date-object: 1.1.0
      is-symbol: 1.1.1

  esbuild-register@3.6.0(esbuild@0.25.0):
    dependencies:
      debug: 4.4.0
      esbuild: 0.25.0
    transitivePeerDependencies:
      - supports-color

  esbuild@0.25.0:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.25.0
      '@esbuild/android-arm': 0.25.0
      '@esbuild/android-arm64': 0.25.0
      '@esbuild/android-x64': 0.25.0
      '@esbuild/darwin-arm64': 0.25.0
      '@esbuild/darwin-x64': 0.25.0
      '@esbuild/freebsd-arm64': 0.25.0
      '@esbuild/freebsd-x64': 0.25.0
      '@esbuild/linux-arm': 0.25.0
      '@esbuild/linux-arm64': 0.25.0
      '@esbuild/linux-ia32': 0.25.0
      '@esbuild/linux-loong64': 0.25.0
      '@esbuild/linux-mips64el': 0.25.0
      '@esbuild/linux-ppc64': 0.25.0
      '@esbuild/linux-riscv64': 0.25.0
      '@esbuild/linux-s390x': 0.25.0
      '@esbuild/linux-x64': 0.25.0
      '@esbuild/netbsd-arm64': 0.25.0
      '@esbuild/netbsd-x64': 0.25.0
      '@esbuild/openbsd-arm64': 0.25.0
      '@esbuild/openbsd-x64': 0.25.0
      '@esbuild/sunos-x64': 0.25.0
      '@esbuild/win32-arm64': 0.25.0
      '@esbuild/win32-ia32': 0.25.0
      '@esbuild/win32-x64': 0.25.0

  escalade@3.2.0: {}

  escape-html@1.0.3: {}

  escape-string-regexp@2.0.0: {}

  escape-string-regexp@4.0.0: {}

  eslint-config-next@14.2.24(eslint@8.57.1)(typescript@5.8.2):
    dependencies:
      '@next/eslint-plugin-next': 14.2.24
      '@rushstack/eslint-patch': 1.10.5
      '@typescript-eslint/eslint-plugin': 6.21.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint@8.57.1)(typescript@5.8.2)
      '@typescript-eslint/parser': 6.21.0(eslint@8.57.1)(typescript@5.8.2)
      eslint: 8.57.1
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.8.3(eslint-plugin-import@2.31.0)(eslint@8.57.1)
      eslint-plugin-import: 2.31.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint-import-resolver-typescript@3.8.3)(eslint@8.57.1)
      eslint-plugin-jsx-a11y: 6.10.2(eslint@8.57.1)
      eslint-plugin-react: 7.37.4(eslint@8.57.1)
      eslint-plugin-react-hooks: 5.0.0-canary-7118f5dd7-20230705(eslint@8.57.1)
    optionalDependencies:
      typescript: 5.8.2
    transitivePeerDependencies:
      - eslint-import-resolver-webpack
      - eslint-plugin-import-x
      - supports-color

  eslint-import-resolver-node@0.3.9:
    dependencies:
      debug: 3.2.7
      is-core-module: 2.16.1
      resolve: 1.22.10
    transitivePeerDependencies:
      - supports-color

  eslint-import-resolver-typescript@3.8.3(eslint-plugin-import@2.31.0)(eslint@8.57.1):
    dependencies:
      '@nolyfill/is-core-module': 1.0.39
      debug: 4.4.0
      enhanced-resolve: 5.18.1
      eslint: 8.57.1
      get-tsconfig: 4.10.0
      is-bun-module: 1.3.0
      stable-hash: 0.0.4
      tinyglobby: 0.2.12
    optionalDependencies:
      eslint-plugin-import: 2.31.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint-import-resolver-typescript@3.8.3)(eslint@8.57.1)
    transitivePeerDependencies:
      - supports-color

  eslint-module-utils@2.12.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.8.3)(eslint@8.57.1):
    dependencies:
      debug: 3.2.7
    optionalDependencies:
      '@typescript-eslint/parser': 6.21.0(eslint@8.57.1)(typescript@5.8.2)
      eslint: 8.57.1
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.8.3(eslint-plugin-import@2.31.0)(eslint@8.57.1)
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-import@2.31.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint-import-resolver-typescript@3.8.3)(eslint@8.57.1):
    dependencies:
      '@rtsao/scc': 1.1.0
      array-includes: 3.1.8
      array.prototype.findlastindex: 1.2.5
      array.prototype.flat: 1.3.3
      array.prototype.flatmap: 1.3.3
      debug: 3.2.7
      doctrine: 2.1.0
      eslint: 8.57.1
      eslint-import-resolver-node: 0.3.9
      eslint-module-utils: 2.12.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.8.2))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.8.3)(eslint@8.57.1)
      hasown: 2.0.2
      is-core-module: 2.16.1
      is-glob: 4.0.3
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      object.groupby: 1.0.3
      object.values: 1.2.1
      semver: 6.3.1
      string.prototype.trimend: 1.0.9
      tsconfig-paths: 3.15.0
    optionalDependencies:
      '@typescript-eslint/parser': 6.21.0(eslint@8.57.1)(typescript@5.8.2)
    transitivePeerDependencies:
      - eslint-import-resolver-typescript
      - eslint-import-resolver-webpack
      - supports-color

  eslint-plugin-jsx-a11y@6.10.2(eslint@8.57.1):
    dependencies:
      aria-query: 5.3.2
      array-includes: 3.1.8
      array.prototype.flatmap: 1.3.3
      ast-types-flow: 0.0.8
      axe-core: 4.10.2
      axobject-query: 4.1.0
      damerau-levenshtein: 1.0.8
      emoji-regex: 9.2.2
      eslint: 8.57.1
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      language-tags: 1.0.9
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      safe-regex-test: 1.1.0
      string.prototype.includes: 2.0.1

  eslint-plugin-react-hooks@5.0.0-canary-7118f5dd7-20230705(eslint@8.57.1):
    dependencies:
      eslint: 8.57.1

  eslint-plugin-react@7.37.4(eslint@8.57.1):
    dependencies:
      array-includes: 3.1.8
      array.prototype.findlast: 1.2.5
      array.prototype.flatmap: 1.3.3
      array.prototype.tosorted: 1.1.4
      doctrine: 2.1.0
      es-iterator-helpers: 1.2.1
      eslint: 8.57.1
      estraverse: 5.3.0
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      minimatch: 3.1.2
      object.entries: 1.1.8
      object.fromentries: 2.0.8
      object.values: 1.2.1
      prop-types: 15.8.1
      resolve: 2.0.0-next.5
      semver: 6.3.1
      string.prototype.matchall: 4.0.12
      string.prototype.repeat: 1.0.0

  eslint-scope@7.2.2:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint@8.57.1:
    dependencies:
      '@eslint-community/eslint-utils': 4.4.1(eslint@8.57.1)
      '@eslint-community/regexpp': 4.12.1
      '@eslint/eslintrc': 2.1.4
      '@eslint/js': 8.57.1
      '@humanwhocodes/config-array': 0.13.0
      '@humanwhocodes/module-importer': 1.0.1
      '@nodelib/fs.walk': 1.2.8
      '@ungap/structured-clone': 1.3.0
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.6
      debug: 4.4.0
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.2.2
      eslint-visitor-keys: 3.4.3
      espree: 9.6.1
      esquery: 1.6.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      find-up: 5.0.0
      glob-parent: 6.0.2
      globals: 13.24.0
      graphemer: 1.4.0
      ignore: 5.3.2
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      is-path-inside: 3.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.4
      strip-ansi: 6.0.1
      text-table: 0.2.0
    transitivePeerDependencies:
      - supports-color

  espree@9.6.1:
    dependencies:
      acorn: 8.14.0
      acorn-jsx: 5.3.2(acorn@8.14.0)
      eslint-visitor-keys: 3.4.3

  esprima@4.0.1: {}

  esquery@1.6.0:
    dependencies:
      estraverse: 5.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@5.3.0: {}

  esutils@2.0.3: {}

  etag@1.8.1: {}

  eventemitter3@4.0.7: {}

  execa@5.1.1:
    dependencies:
      cross-spawn: 7.0.6
      get-stream: 6.0.1
      human-signals: 2.1.0
      is-stream: 2.0.1
      merge-stream: 2.0.0
      npm-run-path: 4.0.1
      onetime: 5.1.2
      signal-exit: 3.0.7
      strip-final-newline: 2.0.0

  exit@0.1.2: {}

  expect@29.7.0:
    dependencies:
      '@jest/expect-utils': 29.7.0
      jest-get-type: 29.6.3
      jest-matcher-utils: 29.7.0
      jest-message-util: 29.7.0
      jest-util: 29.7.0

  express@4.21.2:
    dependencies:
      accepts: 1.3.8
      array-flatten: 1.1.1
      body-parser: 1.20.3
      content-disposition: 0.5.4
      content-type: 1.0.5
      cookie: 0.7.1
      cookie-signature: 1.0.6
      debug: 2.6.9
      depd: 2.0.0
      encodeurl: 2.0.0
      escape-html: 1.0.3
      etag: 1.8.1
      finalhandler: 1.3.1
      fresh: 0.5.2
      http-errors: 2.0.0
      merge-descriptors: 1.0.3
      methods: 1.1.2
      on-finished: 2.4.1
      parseurl: 1.3.3
      path-to-regexp: 0.1.12
      proxy-addr: 2.0.7
      qs: 6.13.0
      range-parser: 1.2.1
      safe-buffer: 5.2.1
      send: 0.19.0
      serve-static: 1.16.2
      setprototypeof: 1.2.0
      statuses: 2.0.1
      type-is: 1.6.18
      utils-merge: 1.0.1
      vary: 1.1.2
    transitivePeerDependencies:
      - supports-color

  fast-deep-equal@3.1.3: {}

  fast-equals@5.2.2: {}

  fast-glob@3.3.3:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fastq@1.19.1:
    dependencies:
      reusify: 1.1.0

  fb-watchman@2.0.2:
    dependencies:
      bser: 2.1.1

  fdir@6.4.3(picomatch@4.0.2):
    optionalDependencies:
      picomatch: 4.0.2

  file-entry-cache@6.0.1:
    dependencies:
      flat-cache: 3.2.0

  filelist@1.0.4:
    dependencies:
      minimatch: 5.1.6

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  finalhandler@1.3.1:
    dependencies:
      debug: 2.6.9
      encodeurl: 2.0.0
      escape-html: 1.0.3
      on-finished: 2.4.1
      parseurl: 1.3.3
      statuses: 2.0.1
      unpipe: 1.0.0
    transitivePeerDependencies:
      - supports-color

  find-up@4.1.0:
    dependencies:
      locate-path: 5.0.0
      path-exists: 4.0.0

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@3.2.0:
    dependencies:
      flatted: 3.3.3
      keyv: 4.5.4
      rimraf: 3.0.2

  flatted@3.3.3: {}

  follow-redirects@1.5.10:
    dependencies:
      debug: 3.1.0
    transitivePeerDependencies:
      - supports-color

  for-each@0.3.5:
    dependencies:
      is-callable: 1.2.7

  foreground-child@3.3.1:
    dependencies:
      cross-spawn: 7.0.6
      signal-exit: 4.1.0

  forwarded@0.2.0: {}

  fraction.js@4.3.7: {}

  fresh@0.5.2: {}

  fs-minipass@2.1.0:
    dependencies:
      minipass: 3.3.6

  fs.realpath@1.0.0: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  function.prototype.name@1.1.8:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      functions-have-names: 1.2.3
      hasown: 2.0.2
      is-callable: 1.2.7

  functions-have-names@1.2.3: {}

  gauge@3.0.2:
    dependencies:
      aproba: 2.0.0
      color-support: 1.1.3
      console-control-strings: 1.1.0
      has-unicode: 2.0.1
      object-assign: 4.1.1
      signal-exit: 3.0.7
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wide-align: 1.1.5

  gensync@1.0.0-beta.2: {}

  get-caller-file@2.0.5: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.2
      math-intrinsics: 1.1.0

  get-nonce@1.0.1: {}

  get-package-type@0.1.0: {}

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.1

  get-stream@6.0.1: {}

  get-symbol-description@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0

  get-tsconfig@4.10.0:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob@10.3.10:
    dependencies:
      foreground-child: 3.3.1
      jackspeak: 2.3.6
      minimatch: 9.0.5
      minipass: 7.1.2
      path-scurry: 1.11.1

  glob@10.4.5:
    dependencies:
      foreground-child: 3.3.1
      jackspeak: 3.4.3
      minimatch: 9.0.5
      minipass: 7.1.2
      package-json-from-dist: 1.0.1
      path-scurry: 1.11.1

  glob@7.2.3:
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1

  globals@11.12.0: {}

  globals@13.24.0:
    dependencies:
      type-fest: 0.20.2

  globalthis@1.0.4:
    dependencies:
      define-properties: 1.2.1
      gopd: 1.2.0

  globby@11.1.0:
    dependencies:
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.3.3
      ignore: 5.3.2
      merge2: 1.4.1
      slash: 3.0.0

  goober@2.1.16(csstype@3.1.3):
    dependencies:
      csstype: 3.1.3

  gopd@1.2.0: {}

  graceful-fs@4.2.11: {}

  graphemer@1.4.0: {}

  has-bigints@1.1.0: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.1

  has-proto@1.2.0:
    dependencies:
      dunder-proto: 1.0.1

  has-symbols@1.1.0: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.1.0

  has-unicode@2.0.1: {}

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  html-escaper@2.0.2: {}

  http-errors@2.0.0:
    dependencies:
      depd: 2.0.0
      inherits: 2.0.4
      setprototypeof: 1.2.0
      statuses: 2.0.1
      toidentifier: 1.0.1

  https-proxy-agent@5.0.1:
    dependencies:
      agent-base: 6.0.2
      debug: 4.4.0
    transitivePeerDependencies:
      - supports-color

  human-signals@2.1.0: {}

  iconv-lite@0.4.24:
    dependencies:
      safer-buffer: 2.1.2

  ignore@5.3.2: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  import-local@3.2.0:
    dependencies:
      pkg-dir: 4.2.0
      resolve-cwd: 3.0.0

  imurmurhash@0.1.4: {}

  inflight@1.0.6:
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  inherits@2.0.4: {}

  internal-slot@1.1.0:
    dependencies:
      es-errors: 1.3.0
      hasown: 2.0.2
      side-channel: 1.1.0

  internmap@2.0.3: {}

  ipaddr.js@1.9.1: {}

  is-array-buffer@3.0.5:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  is-arrayish@0.2.1: {}

  is-arrayish@0.3.2:
    optional: true

  is-async-function@2.1.1:
    dependencies:
      async-function: 1.0.0
      call-bound: 1.0.4
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-bigint@1.1.0:
    dependencies:
      has-bigints: 1.1.0

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-boolean-object@1.2.2:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-bun-module@1.3.0:
    dependencies:
      semver: 7.7.1

  is-callable@1.2.7: {}

  is-core-module@2.16.1:
    dependencies:
      hasown: 2.0.2

  is-data-view@1.0.2:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      is-typed-array: 1.1.15

  is-date-object@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-extglob@2.1.1: {}

  is-finalizationregistry@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-fullwidth-code-point@3.0.0: {}

  is-generator-fn@2.1.0: {}

  is-generator-function@1.1.0:
    dependencies:
      call-bound: 1.0.4
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-map@2.0.3: {}

  is-number-object@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-number@7.0.0: {}

  is-path-inside@3.0.3: {}

  is-regex@1.2.1:
    dependencies:
      call-bound: 1.0.4
      gopd: 1.2.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  is-set@2.0.3: {}

  is-shared-array-buffer@1.0.4:
    dependencies:
      call-bound: 1.0.4

  is-stream@2.0.1: {}

  is-string@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-symbol@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-symbols: 1.1.0
      safe-regex-test: 1.1.0

  is-typed-array@1.1.15:
    dependencies:
      which-typed-array: 1.1.18

  is-weakmap@2.0.2: {}

  is-weakref@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-weakset@2.0.4:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  is-what@4.1.16: {}

  isarray@2.0.5: {}

  isexe@2.0.0: {}

  istanbul-lib-coverage@3.2.2: {}

  istanbul-lib-instrument@5.2.1:
    dependencies:
      '@babel/core': 7.26.9
      '@babel/parser': 7.26.9
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-coverage: 3.2.2
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  istanbul-lib-instrument@6.0.3:
    dependencies:
      '@babel/core': 7.26.9
      '@babel/parser': 7.26.9
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-coverage: 3.2.2
      semver: 7.7.1
    transitivePeerDependencies:
      - supports-color

  istanbul-lib-report@3.0.1:
    dependencies:
      istanbul-lib-coverage: 3.2.2
      make-dir: 4.0.0
      supports-color: 7.2.0

  istanbul-lib-source-maps@4.0.1:
    dependencies:
      debug: 4.4.0
      istanbul-lib-coverage: 3.2.2
      source-map: 0.6.1
    transitivePeerDependencies:
      - supports-color

  istanbul-reports@3.1.7:
    dependencies:
      html-escaper: 2.0.2
      istanbul-lib-report: 3.0.1

  iterator.prototype@1.1.5:
    dependencies:
      define-data-property: 1.1.4
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      has-symbols: 1.1.0
      set-function-name: 2.0.2

  jackspeak@2.3.6:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jackspeak@3.4.3:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jake@10.9.2:
    dependencies:
      async: 3.2.6
      chalk: 4.1.2
      filelist: 1.0.4
      minimatch: 3.1.2

  jest-changed-files@29.7.0:
    dependencies:
      execa: 5.1.1
      jest-util: 29.7.0
      p-limit: 3.1.0

  jest-circus@29.7.0:
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/expect': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      chalk: 4.1.2
      co: 4.6.0
      dedent: 1.5.3
      is-generator-fn: 2.1.0
      jest-each: 29.7.0
      jest-matcher-utils: 29.7.0
      jest-message-util: 29.7.0
      jest-runtime: 29.7.0
      jest-snapshot: 29.7.0
      jest-util: 29.7.0
      p-limit: 3.1.0
      pretty-format: 29.7.0
      pure-rand: 6.1.0
      slash: 3.0.0
      stack-utils: 2.0.6
    transitivePeerDependencies:
      - babel-plugin-macros
      - supports-color

  jest-cli@29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)):
    dependencies:
      '@jest/core': 29.7.0(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      '@jest/test-result': 29.7.0
      '@jest/types': 29.6.3
      chalk: 4.1.2
      create-jest: 29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      exit: 0.1.2
      import-local: 3.2.0
      jest-config: 29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      jest-util: 29.7.0
      jest-validate: 29.7.0
      yargs: 17.7.2
    transitivePeerDependencies:
      - '@types/node'
      - babel-plugin-macros
      - supports-color
      - ts-node

  jest-config@29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)):
    dependencies:
      '@babel/core': 7.26.9
      '@jest/test-sequencer': 29.7.0
      '@jest/types': 29.6.3
      babel-jest: 29.7.0(@babel/core@7.26.9)
      chalk: 4.1.2
      ci-info: 3.9.0
      deepmerge: 4.3.1
      glob: 7.2.3
      graceful-fs: 4.2.11
      jest-circus: 29.7.0
      jest-environment-node: 29.7.0
      jest-get-type: 29.6.3
      jest-regex-util: 29.6.3
      jest-resolve: 29.7.0
      jest-runner: 29.7.0
      jest-util: 29.7.0
      jest-validate: 29.7.0
      micromatch: 4.0.8
      parse-json: 5.2.0
      pretty-format: 29.7.0
      slash: 3.0.0
      strip-json-comments: 3.1.1
    optionalDependencies:
      '@types/node': 22.13.9
      ts-node: 10.9.2(@types/node@22.13.9)(typescript@5.8.2)
    transitivePeerDependencies:
      - babel-plugin-macros
      - supports-color

  jest-diff@29.7.0:
    dependencies:
      chalk: 4.1.2
      diff-sequences: 29.6.3
      jest-get-type: 29.6.3
      pretty-format: 29.7.0

  jest-docblock@29.7.0:
    dependencies:
      detect-newline: 3.1.0

  jest-each@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      chalk: 4.1.2
      jest-get-type: 29.6.3
      jest-util: 29.7.0
      pretty-format: 29.7.0

  jest-environment-node@29.7.0:
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/fake-timers': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      jest-mock: 29.7.0
      jest-util: 29.7.0

  jest-get-type@29.6.3: {}

  jest-haste-map@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      '@types/graceful-fs': 4.1.9
      '@types/node': 22.13.9
      anymatch: 3.1.3
      fb-watchman: 2.0.2
      graceful-fs: 4.2.11
      jest-regex-util: 29.6.3
      jest-util: 29.7.0
      jest-worker: 29.7.0
      micromatch: 4.0.8
      walker: 1.0.8
    optionalDependencies:
      fsevents: 2.3.3

  jest-leak-detector@29.7.0:
    dependencies:
      jest-get-type: 29.6.3
      pretty-format: 29.7.0

  jest-matcher-utils@29.7.0:
    dependencies:
      chalk: 4.1.2
      jest-diff: 29.7.0
      jest-get-type: 29.6.3
      pretty-format: 29.7.0

  jest-message-util@29.7.0:
    dependencies:
      '@babel/code-frame': 7.26.2
      '@jest/types': 29.6.3
      '@types/stack-utils': 2.0.3
      chalk: 4.1.2
      graceful-fs: 4.2.11
      micromatch: 4.0.8
      pretty-format: 29.7.0
      slash: 3.0.0
      stack-utils: 2.0.6

  jest-mock@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      jest-util: 29.7.0

  jest-pnp-resolver@1.2.3(jest-resolve@29.7.0):
    optionalDependencies:
      jest-resolve: 29.7.0

  jest-regex-util@29.6.3: {}

  jest-resolve-dependencies@29.7.0:
    dependencies:
      jest-regex-util: 29.6.3
      jest-snapshot: 29.7.0
    transitivePeerDependencies:
      - supports-color

  jest-resolve@29.7.0:
    dependencies:
      chalk: 4.1.2
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      jest-pnp-resolver: 1.2.3(jest-resolve@29.7.0)
      jest-util: 29.7.0
      jest-validate: 29.7.0
      resolve: 1.22.10
      resolve.exports: 2.0.3
      slash: 3.0.0

  jest-runner@29.7.0:
    dependencies:
      '@jest/console': 29.7.0
      '@jest/environment': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      chalk: 4.1.2
      emittery: 0.13.1
      graceful-fs: 4.2.11
      jest-docblock: 29.7.0
      jest-environment-node: 29.7.0
      jest-haste-map: 29.7.0
      jest-leak-detector: 29.7.0
      jest-message-util: 29.7.0
      jest-resolve: 29.7.0
      jest-runtime: 29.7.0
      jest-util: 29.7.0
      jest-watcher: 29.7.0
      jest-worker: 29.7.0
      p-limit: 3.1.0
      source-map-support: 0.5.13
    transitivePeerDependencies:
      - supports-color

  jest-runtime@29.7.0:
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/fake-timers': 29.7.0
      '@jest/globals': 29.7.0
      '@jest/source-map': 29.6.3
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      chalk: 4.1.2
      cjs-module-lexer: 1.4.3
      collect-v8-coverage: 1.0.2
      glob: 7.2.3
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      jest-message-util: 29.7.0
      jest-mock: 29.7.0
      jest-regex-util: 29.6.3
      jest-resolve: 29.7.0
      jest-snapshot: 29.7.0
      jest-util: 29.7.0
      slash: 3.0.0
      strip-bom: 4.0.0
    transitivePeerDependencies:
      - supports-color

  jest-snapshot@29.7.0:
    dependencies:
      '@babel/core': 7.26.9
      '@babel/generator': 7.26.9
      '@babel/plugin-syntax-jsx': 7.25.9(@babel/core@7.26.9)
      '@babel/plugin-syntax-typescript': 7.25.9(@babel/core@7.26.9)
      '@babel/types': 7.26.9
      '@jest/expect-utils': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      babel-preset-current-node-syntax: 1.1.0(@babel/core@7.26.9)
      chalk: 4.1.2
      expect: 29.7.0
      graceful-fs: 4.2.11
      jest-diff: 29.7.0
      jest-get-type: 29.6.3
      jest-matcher-utils: 29.7.0
      jest-message-util: 29.7.0
      jest-util: 29.7.0
      natural-compare: 1.4.0
      pretty-format: 29.7.0
      semver: 7.7.1
    transitivePeerDependencies:
      - supports-color

  jest-util@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      chalk: 4.1.2
      ci-info: 3.9.0
      graceful-fs: 4.2.11
      picomatch: 2.3.1

  jest-validate@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      camelcase: 6.3.0
      chalk: 4.1.2
      jest-get-type: 29.6.3
      leven: 3.1.0
      pretty-format: 29.7.0

  jest-watcher@29.7.0:
    dependencies:
      '@jest/test-result': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 22.13.9
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      emittery: 0.13.1
      jest-util: 29.7.0
      string-length: 4.0.2

  jest-worker@29.7.0:
    dependencies:
      '@types/node': 22.13.9
      jest-util: 29.7.0
      merge-stream: 2.0.0
      supports-color: 8.1.1

  jest@29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)):
    dependencies:
      '@jest/core': 29.7.0(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      '@jest/types': 29.6.3
      import-local: 3.2.0
      jest-cli: 29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
    transitivePeerDependencies:
      - '@types/node'
      - babel-plugin-macros
      - supports-color
      - ts-node

  jiti@1.21.7: {}

  jose@4.15.9: {}

  js-sha3@0.8.0: {}

  js-tokens@4.0.0: {}

  js-yaml@3.14.1:
    dependencies:
      argparse: 1.0.10
      esprima: 4.0.1

  js-yaml@4.1.0:
    dependencies:
      argparse: 2.0.1

  jsesc@3.1.0: {}

  json-buffer@3.0.1: {}

  json-parse-even-better-errors@2.3.1: {}

  json-schema-traverse@0.4.1: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  json5@1.0.2:
    dependencies:
      minimist: 1.2.8

  json5@2.2.3: {}

  jsx-ast-utils@3.3.5:
    dependencies:
      array-includes: 3.1.8
      array.prototype.flat: 1.3.3
      object.assign: 4.1.7
      object.values: 1.2.1

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  kleur@3.0.3: {}

  language-subtag-registry@0.3.23: {}

  language-tags@1.0.9:
    dependencies:
      language-subtag-registry: 0.3.23

  leven@3.1.0: {}

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lilconfig@3.1.3: {}

  lines-and-columns@1.2.4: {}

  locate-path@5.0.0:
    dependencies:
      p-locate: 4.1.0

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.memoize@4.1.2: {}

  lodash.merge@4.6.2: {}

  lodash@4.17.21: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@10.4.3: {}

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  lru-cache@6.0.0:
    dependencies:
      yallist: 4.0.0

  lucide-react@0.469.0(react@18.2.0):
    dependencies:
      react: 18.2.0

  make-dir@3.1.0:
    dependencies:
      semver: 6.3.1

  make-dir@4.0.0:
    dependencies:
      semver: 7.7.1

  make-error@1.3.6: {}

  makeerror@1.0.12:
    dependencies:
      tmpl: 1.0.5

  match-sorter@6.3.4:
    dependencies:
      '@babel/runtime': 7.26.9
      remove-accents: 0.5.0

  math-intrinsics@1.1.0: {}

  media-typer@0.3.0: {}

  merge-descriptors@1.0.3: {}

  merge-stream@2.0.0: {}

  merge2@1.4.1: {}

  methods@1.1.2: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  microseconds@0.2.0: {}

  mime-db@1.52.0: {}

  mime-types@2.1.35:
    dependencies:
      mime-db: 1.52.0

  mime@1.6.0: {}

  mimic-fn@2.1.0: {}

  minimatch@3.1.2:
    dependencies:
      brace-expansion: 1.1.11

  minimatch@5.1.6:
    dependencies:
      brace-expansion: 2.0.1

  minimatch@9.0.3:
    dependencies:
      brace-expansion: 2.0.1

  minimatch@9.0.5:
    dependencies:
      brace-expansion: 2.0.1

  minimist@1.2.8: {}

  minipass@3.3.6:
    dependencies:
      yallist: 4.0.0

  minipass@5.0.0: {}

  minipass@7.1.2: {}

  minizlib@2.1.2:
    dependencies:
      minipass: 3.3.6
      yallist: 4.0.0

  mkdirp@1.0.4: {}

  ms@2.0.0: {}

  ms@2.1.3: {}

  mz@2.7.0:
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0

  nano-time@1.0.0:
    dependencies:
      big-integer: 1.6.52

  nanoid@3.3.8: {}

  natural-compare@1.4.0: {}

  negotiator@0.6.3: {}

  next-auth@4.24.11(next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0))(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      '@babel/runtime': 7.26.9
      '@panva/hkdf': 1.2.1
      cookie: 0.7.2
      jose: 4.15.9
      next: 15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      oauth: 0.9.15
      openid-client: 5.7.1
      preact: 10.26.4
      preact-render-to-string: 5.2.6(preact@10.26.4)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      uuid: 8.3.2

  next@15.2.1(@babel/core@7.26.9)(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      '@next/env': 15.2.1
      '@swc/counter': 0.1.3
      '@swc/helpers': 0.5.15
      busboy: 1.6.0
      caniuse-lite: 1.0.30001702
      postcss: 8.4.31
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      styled-jsx: 5.1.6(@babel/core@7.26.9)(react@18.2.0)
    optionalDependencies:
      '@next/swc-darwin-arm64': 15.2.1
      '@next/swc-darwin-x64': 15.2.1
      '@next/swc-linux-arm64-gnu': 15.2.1
      '@next/swc-linux-arm64-musl': 15.2.1
      '@next/swc-linux-x64-gnu': 15.2.1
      '@next/swc-linux-x64-musl': 15.2.1
      '@next/swc-win32-arm64-msvc': 15.2.1
      '@next/swc-win32-x64-msvc': 15.2.1
      sharp: 0.33.5
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros

  node-addon-api@5.1.0: {}

  node-fetch@2.7.0:
    dependencies:
      whatwg-url: 5.0.0

  node-int64@0.4.0: {}

  node-releases@2.0.19: {}

  nopt@5.0.0:
    dependencies:
      abbrev: 1.1.1

  normalize-path@3.0.0: {}

  normalize-range@0.1.2: {}

  npm-run-path@4.0.1:
    dependencies:
      path-key: 3.1.1

  npmlog@5.0.1:
    dependencies:
      are-we-there-yet: 2.0.0
      console-control-strings: 1.1.0
      gauge: 3.0.2
      set-blocking: 2.0.0

  oauth@0.9.15: {}

  object-assign@4.1.1: {}

  object-hash@2.2.0: {}

  object-hash@3.0.0: {}

  object-inspect@1.13.4: {}

  object-keys@1.1.1: {}

  object.assign@4.1.7:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1
      has-symbols: 1.1.0
      object-keys: 1.1.1

  object.entries@1.1.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-object-atoms: 1.1.1

  object.groupby@1.0.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9

  object.values@1.2.1:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  oblivious-set@1.0.0: {}

  oidc-token-hash@5.1.0: {}

  on-finished@2.4.1:
    dependencies:
      ee-first: 1.1.1

  once@1.4.0:
    dependencies:
      wrappy: 1.0.2

  onetime@5.1.2:
    dependencies:
      mimic-fn: 2.1.0

  openid-client@5.7.1:
    dependencies:
      jose: 4.15.9
      lru-cache: 6.0.0
      object-hash: 2.2.0
      oidc-token-hash: 5.1.0

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  own-keys@1.0.1:
    dependencies:
      get-intrinsic: 1.3.0
      object-keys: 1.1.1
      safe-push-apply: 1.0.0

  p-limit@2.3.0:
    dependencies:
      p-try: 2.2.0

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@4.1.0:
    dependencies:
      p-limit: 2.3.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  p-try@2.2.0: {}

  package-json-from-dist@1.0.1: {}

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  parse-json@5.2.0:
    dependencies:
      '@babel/code-frame': 7.26.2
      error-ex: 1.3.2
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4

  parseurl@1.3.3: {}

  path-exists@4.0.0: {}

  path-is-absolute@1.0.1: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-scurry@1.11.1:
    dependencies:
      lru-cache: 10.4.3
      minipass: 7.1.2

  path-to-regexp@0.1.12: {}

  path-type@4.0.0: {}

  picocolors@1.1.1: {}

  picomatch@2.3.1: {}

  picomatch@4.0.2: {}

  pify@2.3.0: {}

  pirates@4.0.6: {}

  pkg-dir@4.2.0:
    dependencies:
      find-up: 4.1.0

  possible-typed-array-names@1.1.0: {}

  postcss-import@15.1.0(postcss@8.5.3):
    dependencies:
      postcss: 8.5.3
      postcss-value-parser: 4.2.0
      read-cache: 1.0.0
      resolve: 1.22.10

  postcss-js@4.0.1(postcss@8.5.3):
    dependencies:
      camelcase-css: 2.0.1
      postcss: 8.5.3

  postcss-load-config@4.0.2(postcss@8.5.3)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)):
    dependencies:
      lilconfig: 3.1.3
      yaml: 2.7.0
    optionalDependencies:
      postcss: 8.5.3
      ts-node: 10.9.2(@types/node@22.13.9)(typescript@5.8.2)

  postcss-nested@6.2.0(postcss@8.5.3):
    dependencies:
      postcss: 8.5.3
      postcss-selector-parser: 6.1.2

  postcss-selector-parser@6.1.2:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-value-parser@4.2.0: {}

  postcss@8.4.31:
    dependencies:
      nanoid: 3.3.8
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.3:
    dependencies:
      nanoid: 3.3.8
      picocolors: 1.1.1
      source-map-js: 1.2.1

  preact-render-to-string@5.2.6(preact@10.26.4):
    dependencies:
      preact: 10.26.4
      pretty-format: 3.8.0

  preact@10.26.4: {}

  prelude-ls@1.2.1: {}

  prettier-plugin-tailwindcss@0.5.14(prettier@3.5.3):
    dependencies:
      prettier: 3.5.3

  prettier@3.5.3: {}

  pretty-format@29.7.0:
    dependencies:
      '@jest/schemas': 29.6.3
      ansi-styles: 5.2.0
      react-is: 18.3.1

  pretty-format@3.8.0: {}

  prisma@6.4.1(typescript@5.8.2):
    dependencies:
      '@prisma/engines': 6.4.1
      esbuild: 0.25.0
      esbuild-register: 3.6.0(esbuild@0.25.0)
    optionalDependencies:
      fsevents: 2.3.3
      typescript: 5.8.2
    transitivePeerDependencies:
      - supports-color

  prompts@2.4.2:
    dependencies:
      kleur: 3.0.3
      sisteransi: 1.0.5

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  proxy-addr@2.0.7:
    dependencies:
      forwarded: 0.2.0
      ipaddr.js: 1.9.1

  punycode@2.3.1: {}

  pure-rand@6.1.0: {}

  qs@6.13.0:
    dependencies:
      side-channel: 1.1.0

  qs@6.14.0:
    dependencies:
      side-channel: 1.1.0

  queue-microtask@1.2.3: {}

  radix-ui@1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-accessible-icon': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-accordion': 1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-alert-dialog': 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-aspect-ratio': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-avatar': 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-checkbox': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-collapsible': 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-collection': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-context-menu': 2.2.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-dialog': 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-dropdown-menu': 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-focus-scope': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-form': 0.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-hover-card': 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-label': 2.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-menu': 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-menubar': 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-navigation-menu': 1.2.5(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-popover': 1.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-popper': 1.2.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-portal': 1.1.4(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-primitive': 2.0.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-progress': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-radio-group': 1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-roving-focus': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-scroll-area': 1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-select': 2.1.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-separator': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slider': 1.2.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-slot': 1.1.2(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-switch': 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-tabs': 1.1.3(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-toast': 1.2.6(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-toggle': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-toggle-group': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-toolbar': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-tooltip': 1.1.8(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-escape-keydown': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@18.3.18)(react@18.2.0)
      '@radix-ui/react-visually-hidden': 1.1.2(@types/react-dom@18.3.5(@types/react@18.3.18))(@types/react@18.3.18)(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18
      '@types/react-dom': 18.3.5(@types/react@18.3.18)

  range-parser@1.2.1: {}

  raw-body@2.5.2:
    dependencies:
      bytes: 3.1.2
      http-errors: 2.0.0
      iconv-lite: 0.4.24
      unpipe: 1.0.0

  react-datepicker@7.6.0(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      '@floating-ui/react': 0.27.5(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      clsx: 2.1.1
      date-fns: 3.6.0
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)

  react-dom@18.2.0(react@18.2.0):
    dependencies:
      loose-envify: 1.4.0
      react: 18.2.0
      scheduler: 0.23.2

  react-hook-form@7.54.2(react@18.2.0):
    dependencies:
      react: 18.2.0

  react-hot-toast@2.5.2(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      csstype: 3.1.3
      goober: 2.1.16(csstype@3.1.3)
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)

  react-is@16.13.1: {}

  react-is@18.3.1: {}

  react-query@3.39.3(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      '@babel/runtime': 7.26.9
      broadcast-channel: 3.7.0
      match-sorter: 6.3.4
      react: 18.2.0
    optionalDependencies:
      react-dom: 18.2.0(react@18.2.0)

  react-remove-scroll-bar@2.3.8(@types/react@18.3.18)(react@18.2.0):
    dependencies:
      react: 18.2.0
      react-style-singleton: 2.2.3(@types/react@18.3.18)(react@18.2.0)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.18

  react-remove-scroll@2.6.3(@types/react@18.3.18)(react@18.2.0):
    dependencies:
      react: 18.2.0
      react-remove-scroll-bar: 2.3.8(@types/react@18.3.18)(react@18.2.0)
      react-style-singleton: 2.2.3(@types/react@18.3.18)(react@18.2.0)
      tslib: 2.8.1
      use-callback-ref: 1.3.3(@types/react@18.3.18)(react@18.2.0)
      use-sidecar: 1.1.3(@types/react@18.3.18)(react@18.2.0)
    optionalDependencies:
      '@types/react': 18.3.18

  react-smooth@4.0.4(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      fast-equals: 5.2.2
      prop-types: 15.8.1
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      react-transition-group: 4.4.5(react-dom@18.2.0(react@18.2.0))(react@18.2.0)

  react-style-singleton@2.2.3(@types/react@18.3.18)(react@18.2.0):
    dependencies:
      get-nonce: 1.0.1
      react: 18.2.0
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.18

  react-transition-group@4.4.5(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      '@babel/runtime': 7.26.9
      dom-helpers: 5.2.1
      loose-envify: 1.4.0
      prop-types: 15.8.1
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)

  react@18.2.0:
    dependencies:
      loose-envify: 1.4.0

  read-cache@1.0.0:
    dependencies:
      pify: 2.3.0

  readable-stream@3.6.2:
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.1

  recharts-scale@0.4.5:
    dependencies:
      decimal.js-light: 2.5.1

  recharts@2.15.1(react-dom@18.2.0(react@18.2.0))(react@18.2.0):
    dependencies:
      clsx: 2.1.1
      eventemitter3: 4.0.7
      lodash: 4.17.21
      react: 18.2.0
      react-dom: 18.2.0(react@18.2.0)
      react-is: 18.3.1
      react-smooth: 4.0.4(react-dom@18.2.0(react@18.2.0))(react@18.2.0)
      recharts-scale: 0.4.5
      tiny-invariant: 1.3.3
      victory-vendor: 36.9.2

  reflect.getprototypeof@1.0.10:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      which-builtin-type: 1.2.1

  regenerator-runtime@0.14.1: {}

  regexp.prototype.flags@1.5.4:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-errors: 1.3.0
      get-proto: 1.0.1
      gopd: 1.2.0
      set-function-name: 2.0.2

  remove-accents@0.5.0: {}

  require-directory@2.1.1: {}

  resolve-cwd@3.0.0:
    dependencies:
      resolve-from: 5.0.0

  resolve-from@4.0.0: {}

  resolve-from@5.0.0: {}

  resolve-pkg-maps@1.0.0: {}

  resolve.exports@2.0.3: {}

  resolve@1.22.10:
    dependencies:
      is-core-module: 2.16.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  resolve@2.0.0-next.5:
    dependencies:
      is-core-module: 2.16.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.1.0: {}

  rimraf@3.0.2:
    dependencies:
      glob: 7.2.3

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.3:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      has-symbols: 1.1.0
      isarray: 2.0.5

  safe-buffer@5.2.1: {}

  safe-push-apply@1.0.0:
    dependencies:
      es-errors: 1.3.0
      isarray: 2.0.5

  safe-regex-test@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-regex: 1.2.1

  safer-buffer@2.1.2: {}

  scheduler@0.23.2:
    dependencies:
      loose-envify: 1.4.0

  semver@6.3.1: {}

  semver@7.7.1: {}

  send@0.19.0:
    dependencies:
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      encodeurl: 1.0.2
      escape-html: 1.0.3
      etag: 1.8.1
      fresh: 0.5.2
      http-errors: 2.0.0
      mime: 1.6.0
      ms: 2.1.3
      on-finished: 2.4.1
      range-parser: 1.2.1
      statuses: 2.0.1
    transitivePeerDependencies:
      - supports-color

  serve-static@1.16.2:
    dependencies:
      encodeurl: 2.0.0
      escape-html: 1.0.3
      parseurl: 1.3.3
      send: 0.19.0
    transitivePeerDependencies:
      - supports-color

  set-blocking@2.0.0: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  set-proto@1.0.0:
    dependencies:
      dunder-proto: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1

  setprototypeof@1.2.0: {}

  sharp@0.33.5:
    dependencies:
      color: 4.2.3
      detect-libc: 2.0.3
      semver: 7.7.1
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.33.5
      '@img/sharp-darwin-x64': 0.33.5
      '@img/sharp-libvips-darwin-arm64': 1.0.4
      '@img/sharp-libvips-darwin-x64': 1.0.4
      '@img/sharp-libvips-linux-arm': 1.0.5
      '@img/sharp-libvips-linux-arm64': 1.0.4
      '@img/sharp-libvips-linux-s390x': 1.0.4
      '@img/sharp-libvips-linux-x64': 1.0.4
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.4
      '@img/sharp-libvips-linuxmusl-x64': 1.0.4
      '@img/sharp-linux-arm': 0.33.5
      '@img/sharp-linux-arm64': 0.33.5
      '@img/sharp-linux-s390x': 0.33.5
      '@img/sharp-linux-x64': 0.33.5
      '@img/sharp-linuxmusl-arm64': 0.33.5
      '@img/sharp-linuxmusl-x64': 0.33.5
      '@img/sharp-wasm32': 0.33.5
      '@img/sharp-win32-ia32': 0.33.5
      '@img/sharp-win32-x64': 0.33.5
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.0
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  signal-exit@3.0.7: {}

  signal-exit@4.1.0: {}

  simple-swizzle@0.2.2:
    dependencies:
      is-arrayish: 0.3.2
    optional: true

  sisteransi@1.0.5: {}

  slash@3.0.0: {}

  source-map-js@1.2.1: {}

  source-map-support@0.5.13:
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  source-map@0.6.1: {}

  sprintf-js@1.0.3: {}

  stable-hash@0.0.4: {}

  stack-utils@2.0.6:
    dependencies:
      escape-string-regexp: 2.0.0

  statuses@2.0.1: {}

  streamsearch@1.1.0: {}

  string-length@4.0.2:
    dependencies:
      char-regex: 1.0.2
      strip-ansi: 6.0.1

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string-width@5.1.2:
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.1.0

  string.prototype.includes@2.0.1:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.23.9

  string.prototype.matchall@4.0.12:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      regexp.prototype.flags: 1.5.4
      set-function-name: 2.0.2
      side-channel: 1.1.0

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.23.9

  string.prototype.trim@1.2.10:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-data-property: 1.1.4
      define-properties: 1.2.1
      es-abstract: 1.23.9
      es-object-atoms: 1.1.1
      has-property-descriptors: 1.0.2

  string.prototype.trimend@1.0.9:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  string_decoder@1.3.0:
    dependencies:
      safe-buffer: 5.2.1

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.1.0:
    dependencies:
      ansi-regex: 6.1.0

  strip-bom@3.0.0: {}

  strip-bom@4.0.0: {}

  strip-final-newline@2.0.0: {}

  strip-json-comments@3.1.1: {}

  stripe@14.25.0:
    dependencies:
      '@types/node': 22.13.9
      qs: 6.14.0

  styled-jsx@5.1.6(@babel/core@7.26.9)(react@18.2.0):
    dependencies:
      client-only: 0.0.1
      react: 18.2.0
    optionalDependencies:
      '@babel/core': 7.26.9

  sucrase@3.35.0:
    dependencies:
      '@jridgewell/gen-mapping': 0.3.8
      commander: 4.1.1
      glob: 10.4.5
      lines-and-columns: 1.2.4
      mz: 2.7.0
      pirates: 4.0.6
      ts-interface-checker: 0.1.13

  superjson@2.2.2:
    dependencies:
      copy-anything: 3.0.5

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-color@8.1.1:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  tabbable@6.2.0: {}

  tailwind-merge@2.6.0: {}

  tailwindcss@3.4.17(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)):
    dependencies:
      '@alloc/quick-lru': 5.2.0
      arg: 5.0.2
      chokidar: 3.6.0
      didyoumean: 1.2.2
      dlv: 1.1.3
      fast-glob: 3.3.3
      glob-parent: 6.0.2
      is-glob: 4.0.3
      jiti: 1.21.7
      lilconfig: 3.1.3
      micromatch: 4.0.8
      normalize-path: 3.0.0
      object-hash: 3.0.0
      picocolors: 1.1.1
      postcss: 8.5.3
      postcss-import: 15.1.0(postcss@8.5.3)
      postcss-js: 4.0.1(postcss@8.5.3)
      postcss-load-config: 4.0.2(postcss@8.5.3)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      postcss-nested: 6.2.0(postcss@8.5.3)
      postcss-selector-parser: 6.1.2
      resolve: 1.22.10
      sucrase: 3.35.0
    transitivePeerDependencies:
      - ts-node

  tapable@2.2.1: {}

  tar@6.2.1:
    dependencies:
      chownr: 2.0.0
      fs-minipass: 2.1.0
      minipass: 5.0.0
      minizlib: 2.1.2
      mkdirp: 1.0.4
      yallist: 4.0.0

  test-exclude@6.0.0:
    dependencies:
      '@istanbuljs/schema': 0.1.3
      glob: 7.2.3
      minimatch: 3.1.2

  text-table@0.2.0: {}

  thenify-all@1.6.0:
    dependencies:
      thenify: 3.3.1

  thenify@3.3.1:
    dependencies:
      any-promise: 1.3.0

  tiny-invariant@1.3.3: {}

  tinyglobby@0.2.12:
    dependencies:
      fdir: 6.4.3(picomatch@4.0.2)
      picomatch: 4.0.2

  tmpl@1.0.5: {}

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  toidentifier@1.0.1: {}

  tr46@0.0.3: {}

  trpc@0.11.3:
    dependencies:
      axios: 0.19.2
    transitivePeerDependencies:
      - supports-color

  ts-api-utils@1.4.3(typescript@5.8.2):
    dependencies:
      typescript: 5.8.2

  ts-interface-checker@0.1.13: {}

  ts-jest@29.2.6(@babel/core@7.26.9)(@jest/transform@29.7.0)(@jest/types@29.6.3)(babel-jest@29.7.0(@babel/core@7.26.9))(esbuild@0.25.0)(jest@29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2)))(typescript@5.8.2):
    dependencies:
      bs-logger: 0.2.6
      ejs: 3.1.10
      fast-json-stable-stringify: 2.1.0
      jest: 29.7.0(@types/node@22.13.9)(ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2))
      jest-util: 29.7.0
      json5: 2.2.3
      lodash.memoize: 4.1.2
      make-error: 1.3.6
      semver: 7.7.1
      typescript: 5.8.2
      yargs-parser: 21.1.1
    optionalDependencies:
      '@babel/core': 7.26.9
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      babel-jest: 29.7.0(@babel/core@7.26.9)
      esbuild: 0.25.0

  ts-node@10.9.2(@types/node@22.13.9)(typescript@5.8.2):
    dependencies:
      '@cspotcode/source-map-support': 0.8.1
      '@tsconfig/node10': 1.0.11
      '@tsconfig/node12': 1.0.11
      '@tsconfig/node14': 1.0.3
      '@tsconfig/node16': 1.0.4
      '@types/node': 22.13.9
      acorn: 8.14.0
      acorn-walk: 8.3.4
      arg: 4.1.3
      create-require: 1.1.1
      diff: 4.0.2
      make-error: 1.3.6
      typescript: 5.8.2
      v8-compile-cache-lib: 3.0.1
      yn: 3.1.1

  tsconfig-paths@3.15.0:
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.2
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.8.1: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  type-detect@4.0.8: {}

  type-fest@0.20.2: {}

  type-fest@0.21.3: {}

  type-is@1.6.18:
    dependencies:
      media-typer: 0.3.0
      mime-types: 2.1.35

  typed-array-buffer@1.0.3:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-typed-array: 1.1.15

  typed-array-byte-length@1.0.3:
    dependencies:
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15

  typed-array-byte-offset@1.0.4:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15
      reflect.getprototypeof: 1.0.10

  typed-array-length@1.0.7:
    dependencies:
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      is-typed-array: 1.1.15
      possible-typed-array-names: 1.1.0
      reflect.getprototypeof: 1.0.10

  typescript@5.8.2: {}

  unbox-primitive@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-bigints: 1.1.0
      has-symbols: 1.1.0
      which-boxed-primitive: 1.1.1

  undici-types@6.20.0: {}

  unload@2.2.0:
    dependencies:
      '@babel/runtime': 7.26.9
      detect-node: 2.1.0

  unpipe@1.0.0: {}

  update-browserslist-db@1.1.3(browserslist@4.24.4):
    dependencies:
      browserslist: 4.24.4
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-callback-ref@1.3.3(@types/react@18.3.18)(react@18.2.0):
    dependencies:
      react: 18.2.0
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.18

  use-sidecar@1.1.3(@types/react@18.3.18)(react@18.2.0):
    dependencies:
      detect-node-es: 1.1.0
      react: 18.2.0
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 18.3.18

  use-sync-external-store@1.4.0(react@18.2.0):
    dependencies:
      react: 18.2.0

  util-deprecate@1.0.2: {}

  utils-merge@1.0.1: {}

  uuid@8.3.2: {}

  v8-compile-cache-lib@3.0.1: {}

  v8-to-istanbul@9.3.0:
    dependencies:
      '@jridgewell/trace-mapping': 0.3.25
      '@types/istanbul-lib-coverage': 2.0.6
      convert-source-map: 2.0.0

  vary@1.1.2: {}

  victory-vendor@36.9.2:
    dependencies:
      '@types/d3-array': 3.2.1
      '@types/d3-ease': 3.0.2
      '@types/d3-interpolate': 3.0.4
      '@types/d3-scale': 4.0.9
      '@types/d3-shape': 3.1.7
      '@types/d3-time': 3.0.4
      '@types/d3-timer': 3.0.2
      d3-array: 3.2.4
      d3-ease: 3.0.1
      d3-interpolate: 3.0.1
      d3-scale: 4.0.2
      d3-shape: 3.2.0
      d3-time: 3.1.0
      d3-timer: 3.0.1

  walker@1.0.8:
    dependencies:
      makeerror: 1.0.12

  webidl-conversions@3.0.1: {}

  whatwg-url@5.0.0:
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1

  which-boxed-primitive@1.1.1:
    dependencies:
      is-bigint: 1.1.0
      is-boolean-object: 1.2.2
      is-number-object: 1.1.1
      is-string: 1.1.1
      is-symbol: 1.1.1

  which-builtin-type@1.2.1:
    dependencies:
      call-bound: 1.0.4
      function.prototype.name: 1.1.8
      has-tostringtag: 1.0.2
      is-async-function: 2.1.1
      is-date-object: 1.1.0
      is-finalizationregistry: 1.1.1
      is-generator-function: 1.1.0
      is-regex: 1.2.1
      is-weakref: 1.1.1
      isarray: 2.0.5
      which-boxed-primitive: 1.1.1
      which-collection: 1.0.2
      which-typed-array: 1.1.18

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.4

  which-typed-array@1.1.18:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      call-bound: 1.0.4
      for-each: 0.3.5
      gopd: 1.2.0
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  wide-align@1.1.5:
    dependencies:
      string-width: 4.2.3

  word-wrap@1.2.5: {}

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@8.1.0:
    dependencies:
      ansi-styles: 6.2.1
      string-width: 5.1.2
      strip-ansi: 7.1.0

  wrappy@1.0.2: {}

  write-file-atomic@4.0.2:
    dependencies:
      imurmurhash: 0.1.4
      signal-exit: 3.0.7

  y18n@5.0.8: {}

  yallist@3.1.1: {}

  yallist@4.0.0: {}

  yaml@2.7.0: {}

  yargs-parser@21.1.1: {}

  yargs@17.7.2:
    dependencies:
      cliui: 8.0.1
      escalade: 3.2.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      string-width: 4.2.3
      y18n: 5.0.8
      yargs-parser: 21.1.1

  yn@3.1.1: {}

  yocto-queue@0.1.0: {}

  zod@3.24.2: {}

```

`/Users/oscarvuong/doggo hotel/prd.md`:

```md
# **Product Requirements Document (PRD): Dog Boarding Facility Management System**

## **1. Project Overview & Goals**

### **1.1 Objective**

To design and implement a **scalable, secure, and role-based dog boarding facility management system** that efficiently handles **reservations, pet management, staff workflows, payments, compliance tracking, and industry standard legal requirements**.

### **1.2 Key Features**

- **Multi-Role Access Control** – Admins, Managers, Staff, PetOwners, with stacked permissions.
- **Dynamic Booking & Availability Management** – Real-time scheduling, waitlists, and conflict resolution.
- **Automated Payments & Refunds** – Stripe integration for cashless transactions.
- **Comprehensive Pet Management** – ClientPets and EmployeePets handled separately.
- **Security & Compliance** – Role-based restrictions, abandonment handling, and legal agreements.
- **Industry Standard Legal Forms and Compliance Enforcement** – Integration of all legally required forms and contracts.
- **Automated & Manual Compliance Tracking** – System will automatically enforce key compliance policies (e.g., vaccination verification, payment authorizations), while admins will retain the ability to manually review and override compliance flags where necessary.

---

## **2. User Roles & Permissions**

### **2.1 Role Hierarchy & Responsibilities**

| **Role**            | **Core Responsibilities**                                  | **Can Assign Roles?**           |
| ------------------- | ---------------------------------------------------------- | ------------------------------- |
| **System Admin**    | Full system control, security enforcement, global settings | Yes (All Roles)                 |
| **Franchise Owner** | Multi-location management, financial oversight             | Yes (Facility Admins and Below) |
| **Facility Admin**  | Facility-level management, staff assignments, payments     | Yes (Managers and Below)        |
| **Manager**         | Daily operations, bookings, check-ins, scheduling          | Yes (Staff Only)                |
| **Staff**           | Customer service, check-ins, pet care, reservations        | No                              |
| **PetOwner**        | Booking services, managing pets, making payments           | No                              |

- **Admins can override payments and adjust reservations.**
- **Temporary Admins cannot create or promote new Managers.**
- **Permissions can be set as persistent, Close of Business (COB), or for a specific date.**
- **If any employee roles are removed, they are automatically moved into the PetOwner client role, and any pets associated with them will also be transferred to their ownership.**

---

## **3. Core System Features**

### **3.1 Authentication and User Management**

- **Secure Login and Logout Logic** with session management.
- **User Registration Form and Logic** ensuring account verification.
- **Role-based access control enforced at authentication level.**

### **3.2 Booking & Scheduling**

- **Real-time availability checking** to prevent overbooking.
- **Waitlist system** prioritizing high-value customers.
- **Admin override for conflicting reservations** requiring manual approval.
- **Dynamic scheduling for mid-stay conflicts** with automated recommendations.
- **Deferred Payment Option** – Admins can create bookings with delayed payment status.

### **3.3 Payment Processing & Financials**

- **Stripe-powered, cashless payments.**
- **Only Admins can defer or override payments.**
- **Automatic invoice generation & payment tracking.**
- **Failed payment retry logic (max 3 attempts).**
- **Financial reporting per facility for Franchise Owners.**

### **3.4 Pet Management**

- **Separation of ClientPets (customer-owned) and EmployeePets (staff-owned).**
- **Automated vaccination reminders for expiring records.**
- **Breed-specific restrictions for handling requirements.**
- **Admins can update medical and behavior records.**
- **Staff cannot modify pet ownership details.**

### **3.5 Abandonment Handling**

- **Grace period of 24-72 hours post-pickup deadline.**
- **Automated owner contact attempts logged in the system.**
- **Emergency contacts are notified if primary owner is unresponsive.**
- **Extended stay charges auto-applied for overdue pickups.**
- **Legal escalation workflow for unclaimed pets.**

### **3.6 Security & Logging**

- **All role assignments and permission changes are logged.**
- **Temporary permissions are auto-revoked after expiration.**
- **All financial transactions are audit-tracked.**
- **Admins are alerted for unauthorized access attempts.**
- **System-wide logging for troubleshooting and compliance.**

### **3.7 Legal Forms & Compliance Documentation**

- **Owner Agreement** – Terms of service, boarding policies, and cancellation policies.
- **Liability Waiver** – Required acknowledgment of risk and release from liability.
- **Veterinary Release Form** – Authorization for emergency veterinary care.
- **Vaccination & Medical Records Form** – Verification of up-to-date vaccinations.
- **Payment Authorization Form** – Permission for recurring or future charges.
- **Consent Forms for Emergency Actions** – Ensuring legal authority to act in case of abandonment or medical emergencies.

---

## **4. Business Rules & Edge Cases**

- **Admin-Only Booking Overrides** – Admins can bypass payment at the time of booking but must settle later.
- **Refund Approval** – Refunds are not automatic and require Admin approval.
- **Discounted Stays for Staff** – Employees receive automatic rate reductions on bookings.
- **Waitlist Management** – If a pet’s requested stay overlaps with unavailable days, the owner is notified.
- **Automatic Role Expiration** – If a temporary permission is granted, it expires at COB or a given date.
- **Managers with Temporary Admin Access Cannot Create Managers** – Prevents privilege escalation loopholes.
- **Audit Logging for Deferred Payments** – Unpaid bookings are flagged and tracked.

---

## **5. Compliance & Legal Protections**

- **All PetOwners must digitally acknowledge** boarding agreements, cancellation policies, and abandonment clauses.
- **Financial liability clauses for overdue stays** are built into booking agreements.
- **Automatic alerts for policy violations** (e.g., missing vaccination records, unpaid balances).
- **All legal notices and administrative actions are timestamped in system logs.**
- **Data security protocols ensure Personally Identifiable Information (PII) protection.**

---

## **6. Pre-Launch Development Requirements**

- **Customer portal enhancements** (self-service for cancellations, add-ons, and reporting).
- **Advanced analytics dashboard** for business insights.
- **Third-party integrations (Zapier, QuickBooks, etc.).**
- **AI-driven demand forecasting** for peak seasons.
- **Automated task workflows** for facility staff (feeding schedules, check-in/out notifications).
- **Multi-location facility management** for large franchises.
- **Localization & multi-language support.**
- **Automated compliance enforcement per state/country regulations.**

---

## **7. Next Steps**

- **Finalize development roadmap and begin implementation.**
- **Ensure authentication and registration logic is functional.**
- **Complete legal form integrations into user workflows.**


```

`/Users/oscarvuong/doggo hotel/Dockerfile`:

```
# Dockerfile for Doggo Hotel Backend

# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application and generate Prisma client
RUN pnpm run build
RUN pnpm prisma generate

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app ./

EXPOSE 3000

CMD [ "pnpm", "start" ] 
```

`/Users/oscarvuong/doggo hotel/jest.config.js`:

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}; 
```

`/Users/oscarvuong/doggo hotel/prisma/migrations/migration_lock.toml`:

```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
```

`/Users/oscarvuong/doggo hotel/prisma/migrations/20250305135827_init/migration.sql`:

```sql
/*
  Warnings:

  - The values [ADMIN] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Facility` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `operatingHours` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Facility` table. All the data in the column will be lost.
  - The `id` column on the `Facility` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Kennel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Kennel` table. All the data in the column will be lost.
  - The `id` column on the `Kennel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deletedAt` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `dietaryNeeds` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `medicalInfo` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Pet` table. All the data in the column will be lost.
  - The `id` column on the `Pet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deletedAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `kennelId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Reservation` table. All the data in the column will be lost.
  - The `id` column on the `Reservation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `AddOnService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vaccination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AddOnServiceToReservation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `label` to the `Kennel` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `facilityId` on the `Kennel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ownerId` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `petId` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('SYSTEM_ADMIN', 'FACILITY_ADMIN', 'MANAGER', 'STAFF', 'PET_OWNER');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'PET_OWNER';
COMMIT;

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "Kennel" DROP CONSTRAINT "Kennel_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_kennelId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_petId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vaccination" DROP CONSTRAINT "Vaccination_petId_fkey";

-- DropForeignKey
ALTER TABLE "_AddOnServiceToReservation" DROP CONSTRAINT "_AddOnServiceToReservation_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddOnServiceToReservation" DROP CONSTRAINT "_AddOnServiceToReservation_B_fkey";

-- AlterTable
ALTER TABLE "Facility" DROP CONSTRAINT "Facility_pkey",
DROP COLUMN "address",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "email",
DROP COLUMN "operatingHours",
DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "location" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Facility_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Kennel" DROP CONSTRAINT "Kennel_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "status",
DROP COLUMN "tenantId",
DROP COLUMN "updatedAt",
ADD COLUMN     "label" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "facilityId",
ADD COLUMN     "facilityId" INTEGER NOT NULL,
ADD CONSTRAINT "Kennel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_pkey",
DROP COLUMN "deletedAt",
DROP COLUMN "dietaryNeeds",
DROP COLUMN "medicalInfo",
DROP COLUMN "updatedAt",
ADD COLUMN     "vaccinated" BOOLEAN,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "breed" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
DROP COLUMN "ownerId",
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD CONSTRAINT "Pet_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "deletedAt",
DROP COLUMN "endDate",
DROP COLUMN "kennelId",
DROP COLUMN "startDate",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING',
DROP COLUMN "petId",
ADD COLUMN     "petId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "deletedAt",
DROP COLUMN "tenantId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "AddOnService";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Permission";

-- DropTable
DROP TABLE "Vaccination";

-- DropTable
DROP TABLE "_AddOnServiceToReservation";

-- DropEnum
DROP TYPE "KennelStatus";

-- DropEnum
DROP TYPE "PaymentStatus";

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kennel" ADD CONSTRAINT "Kennel_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

```

`/Users/oscarvuong/doggo hotel/prisma/migrations/20250203043223_/migration.sql`:

```sql
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PET_OWNER', 'STAFF', 'MANAGER', 'ADMIN');

-- CreateEnum
CREATE TYPE "KennelSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE', 'EXTRA_LARGE');

-- CreateEnum
CREATE TYPE "KennelStatus" AS ENUM ('AVAILABLE', 'OCCUPIED', 'MAINTENANCE');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'REFUNDED', 'FAILED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'PET_OWNER',
    "tenantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "resource" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "ownerId" TEXT NOT NULL,
    "medicalInfo" TEXT,
    "dietaryNeeds" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vaccination" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "petId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vaccination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kennel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" "KennelSize" NOT NULL,
    "status" "KennelStatus" NOT NULL DEFAULT 'AVAILABLE',
    "price" DOUBLE PRECISION NOT NULL,
    "facilityId" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Kennel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" "ReservationStatus" NOT NULL,
    "petId" TEXT NOT NULL,
    "kennelId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "stripePaymentId" TEXT,
    "reservationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facility" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "operatingHours" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddOnService" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "AddOnService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "resource" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AddOnServiceToReservation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AddOnServiceToReservation_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_reservationId_key" ON "Payment"("reservationId");

-- CreateIndex
CREATE INDEX "_AddOnServiceToReservation_B_index" ON "_AddOnServiceToReservation"("B");

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccination" ADD CONSTRAINT "Vaccination_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kennel" ADD CONSTRAINT "Kennel_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_kennelId_fkey" FOREIGN KEY ("kennelId") REFERENCES "Kennel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddOnServiceToReservation" ADD CONSTRAINT "_AddOnServiceToReservation_A_fkey" FOREIGN KEY ("A") REFERENCES "AddOnService"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddOnServiceToReservation" ADD CONSTRAINT "_AddOnServiceToReservation_B_fkey" FOREIGN KEY ("B") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

`/Users/oscarvuong/doggo hotel/prisma/schema.prisma`:

```prisma
// This is your Prisma schema file
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id           String        @id @default(cuid())
  email        String        @unique
  password     String
  role         Role          @default(PET_OWNER)
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
  pets         Pet[]
  reservations Reservation[]
  payments     Payment[]     @relation("UserPayments")
}

enum Role {
  SYSTEM_ADMIN
  FACILITY_ADMIN
  MANAGER
  STAFF
  PET_OWNER
}

model Pet {
  id                 Int      @id @default(autoincrement())
  name               String
  species            String
  breed              String?
  age                Int?
  vaccinationStatus  String[] @default([])
  medicalHistory     String?
  dietaryPreferences String?
  behavioralNotes    String?
  emergencyContact   String?
  ownerId            String
  owner              User     @relation(fields: [ownerId], references: [id])
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
  reservations       Reservation[]
}

model Facility {
  id             Int      @id @default(autoincrement())
  name           String
  location       String?
  address        String?
  phone          String?
  email          String?
  operatingHours String?
  kennels        Kennel[]
  capacity       Int?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  reservations   Reservation[] @relation("FacilityReservations")
}

model Kennel {
  id         Int            @id @default(autoincrement())
  facilityId Int
  name       String
  capacity   Int?
  category   KennelCategory
  facility   Facility       @relation(fields: [facilityId], references: [id])
  createdAt  DateTime       @default(now())
  updatedAt  DateTime       @updatedAt
  reservations Reservation[] @relation("ReservationKennel")
}

enum KennelCategory {
  SMALL
  MEDIUM
  LARGE
  EXTRA_LARGE
}

model Reservation {
  id         Int               @id @default(autoincrement())
  status     ReservationStatus @default(PENDING)
  createdAt  DateTime          @default(now())
  updatedAt  DateTime          @updatedAt
  startDate  DateTime
  endDate    DateTime
  petId      Int
  pet        Pet               @relation(fields: [petId], references: [id])
  userId     String
  user       User              @relation(fields: [userId], references: [id])
  kennelId   Int
  kennel     Kennel            @relation("ReservationKennel", fields: [kennelId], references: [id])
  facilityId Int
  facility   Facility          @relation("FacilityReservations", fields: [facilityId], references: [id])
  payment    Payment?          @relation("ReservationPayment")
}

enum ReservationStatus {
  PENDING
  CONFIRMED
  CHECKED_IN
  CHECKED_OUT
  CANCELLED
}

// Payment model added for payment processing
model Payment {
  id              Int           @id @default(autoincrement())
  amount          Float
  status          PaymentStatus @default(PENDING)
  stripePaymentId String?
  reservationId   Int           @unique
  reservation     Reservation   @relation("ReservationPayment", fields: [reservationId], references: [id])
  userId          String
  user            User          @relation("UserPayments", fields: [userId], references: [id])
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
}

enum PaymentStatus {
  PENDING
  PAID
  REFUNDED
  FAILED
}

```

`/Users/oscarvuong/doggo hotel/prisma/seed.ts`:

```ts
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Check if the default user already exists by email
  const existingUser = await prisma.user.findUnique({
    where: { email: 'default@example.com' },
  });

  if (!existingUser) {
    const defaultPassword = 'defaultpassword';
    const hashedPassword = await hash(defaultPassword, 10);

    await prisma.user.create({
      data: {
        name: 'Default User',
        email: 'default@example.com',
        // The field name for the password may depend on your schema.
        // Adjust the field if your schema uses "hashedPassword" or similar.
        password: hashedPassword,
        role: 'CUSTOMER',
      },
    });
    console.log('Default user created.');
  } else {
    console.log('Default user already exists.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient, Role, KennelSize, KennelStatus, ReservationStatus, PaymentStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const { hash } = bcrypt;

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.$transaction([
    prisma.payment.deleteMany(),
    prisma.reservation.deleteMany(),
    prisma.vaccination.deleteMany(),
    prisma.pet.deleteMany(),
    prisma.kennel.deleteMany(),
    prisma.facility.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  // Create facility
  const facility = await prisma.facility.create({
    data: {
      name: 'Doggo Hotel Main',
      address: '123 Paw Street, San Francisco, CA 94105',
      phone: '(415) 555-0123',
      email: 'info@doggohotel.com',
      operatingHours: {
        monday: { open: '07:00', close: '19:00' },
        tuesday: { open: '07:00', close: '19:00' },
        wednesday: { open: '07:00', close: '19:00' },
        thursday: { open: '07:00', close: '19:00' },
        friday: { open: '07:00', close: '19:00' },
        saturday: { open: '08:00', close: '18:00' },
        sunday: { open: '08:00', close: '18:00' },
      },
    },
  });

  // Create users with different roles
  const adminPassword = await hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@doggohotel.com' },
    update: {},
    create: {
      email: 'admin@doggohotel.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN',
      tenantId: 'default-tenant',
    },
  });

  const managerPassword = await hash('manager123', 10);
  const manager = await prisma.user.upsert({
    where: { email: 'manager@doggohotel.com' },
    update: {},
    create: {
      email: 'manager@doggohotel.com',
      password: managerPassword,
      name: 'Manager User',
      role: 'MANAGER',
      tenantId: 'default-tenant',
    },
  });

  const staffPassword = await hash('staff123', 10);
  const staff = await prisma.user.upsert({
    where: { email: 'staff@doggohotel.com' },
    update: {},
    create: {
      email: 'staff@doggohotel.com',
      password: staffPassword,
      name: 'Staff User',
      role: 'STAFF',
      tenantId: 'default-tenant',
    },
  });

  // Create pet owners
  const owners = await Promise.all(
    [
      { email: 'john@example.com' },
      { email: 'sarah@example.com' },
      { email: 'michael@example.com' },
      { email: 'emily@example.com' },
      { email: 'david@example.com' },
    ].map(async (owner) => {
      const password = await hash('petowner123', 10);
      return prisma.user.upsert({
        where: { email: owner.email },
        update: {},
        create: {
          email: owner.email,
          password,
          name: 'Pet Owner',
          role: 'PET_OWNER',
          tenantId: 'default-tenant',
        },
      });
    })
  );

  // Create kennels
  const kennels = await Promise.all(
    Array.from({ length: 20 }, (_, i) => {
      const size = i < 8 ? KennelSize.SMALL : i < 14 ? KennelSize.MEDIUM : KennelSize.LARGE;
      const price = size === KennelSize.SMALL ? 35 : size === KennelSize.MEDIUM ? 45 : 55;
      return prisma.kennel.create({
        data: {
          name: `Kennel ${i + 1}`,
          size,
          status: KennelStatus.AVAILABLE,
          price,
          facilityId: facility.id,
          tenantId: facility.id,
        },
      });
    })
  );

  // Create pets with vaccinations
  const pets = await Promise.all(
    [
      { name: 'Max', breed: 'Golden Retriever', age: 3, ownerId: owners[0].id },
      { name: 'Luna', breed: 'French Bulldog', age: 2, ownerId: owners[0].id },
      { name: 'Bella', breed: 'German Shepherd', age: 4, ownerId: owners[1].id },
      { name: 'Charlie', breed: 'Poodle', age: 2, ownerId: owners[2].id },
      { name: 'Lucy', breed: 'Chihuahua', age: 1, ownerId: owners[2].id },
      { name: 'Cooper', breed: 'Labrador', age: 5, ownerId: owners[3].id },
      { name: 'Daisy', breed: 'Beagle', age: 3, ownerId: owners[4].id },
      { name: 'Rocky', breed: 'Rottweiler', age: 4, ownerId: owners[4].id },
    ].map(async (pet) => {
      const createdPet = await prisma.pet.create({
        data: {
          ...pet,
          medicalInfo: pet.name === 'Lucy' ? 'Requires daily medication' : null,
          dietaryNeeds: null,
        },
      });

      // Add vaccinations for each pet
      await prisma.vaccination.create({
        data: {
          type: 'Rabies',
          date: new Date(2023, 1, 1),
          expiryDate: new Date(2024, 1, 1),
          petId: createdPet.id,
        },
      });

      return createdPet;
    })
  );

  // Create reservations
  const now = new Date();
  const reservations = await Promise.all([
    // Past reservations
    ...Array.from({ length: 10 }, (_, i) =>
      prisma.reservation.create({
        data: {
          startDate: new Date(now.getFullYear(), now.getMonth() - 1, i + 1),
          endDate: new Date(now.getFullYear(), now.getMonth() - 1, i + 5),
          status: ReservationStatus.CHECKED_OUT,
          petId: pets[i % pets.length].id,
          kennelId: kennels[i % kennels.length].id,
          userId: owners[i % owners.length].id,
        },
      })
    ),

    // Current reservations
    ...Array.from({ length: 5 }, (_, i) =>
      prisma.reservation.create({
        data: {
          startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2),
          endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3),
          status: ReservationStatus.CHECKED_IN,
          petId: pets[(i + 2) % pets.length].id,
          kennelId: kennels[(i + 5) % kennels.length].id,
          userId: owners[(i + 2) % owners.length].id,
        },
      })
    ),

    // Future reservations
    ...Array.from({ length: 8 }, (_, i) =>
      prisma.reservation.create({
        data: {
          startDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + i + 5),
          endDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + i + 10),
          status: ReservationStatus.CONFIRMED,
          petId: pets[(i + 4) % pets.length].id,
          kennelId: kennels[(i + 10) % kennels.length].id,
          userId: owners[(i + 4) % owners.length].id,
        },
      })
    ),
  ]);

  // Create payments
  const payments = await Promise.all([
    // Completed payments for past reservations
    ...reservations
      .filter((r) => r.status === ReservationStatus.CHECKED_OUT)
      .map((reservation) =>
        prisma.payment.create({
          data: {
            amount: Math.floor(Math.random() * 300) + 100,
            status: PaymentStatus.PAID,
            stripePaymentId: `pi_${Math.random().toString(36).substr(2, 9)}`,
            reservationId: reservation.id,
            userId: reservation.userId,
          },
        })
      ),

    // Pending payments for current reservations
    ...reservations
      .filter((r) => r.status === ReservationStatus.CHECKED_IN)
      .map((reservation) =>
        prisma.payment.create({
          data: {
            amount: Math.floor(Math.random() * 300) + 100,
            status: PaymentStatus.PENDING,
            stripePaymentId: `pi_${Math.random().toString(36).substr(2, 9)}`,
            reservationId: reservation.id,
            userId: reservation.userId,
          },
        })
      ),

    // Future payments
    ...reservations
      .filter((r) => r.status === ReservationStatus.CONFIRMED)
      .map((reservation) =>
        prisma.payment.create({
          data: {
            amount: Math.floor(Math.random() * 300) + 100,
            status: PaymentStatus.PENDING,
            stripePaymentId: `pi_${Math.random().toString(36).substr(2, 9)}`,
            reservationId: reservation.id,
            userId: reservation.userId,
          },
        })
      ),
  ]);

  console.log({
    users: await prisma.user.count(),
    pets: await prisma.pet.count(),
    kennels: await prisma.kennel.count(),
    reservations: await prisma.reservation.count(),
    payments: await prisma.payment.count(),
  });

  const roles = [
    'ADMIN',
    'MANAGER',
    'STAFF',
    'PET_OWNER',
  ];

  for (const role of roles) {
    await prisma.user.create({
      data: {
        email: `${role.toLowerCase()}@example.com`,
        password: 'password123', // In a real scenario, ensure passwords are hashed
        name: `${role.replace('_', ' ')} User`,
        role: role as Role,
        tenantId: 'default-tenant',
      },
    });
  }

  console.log('Test users created for each role.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

```

`/Users/oscarvuong/doggo hotel/prompt.md`:

```md
Project Path: pet-boarding-system

Source Tree:

```
pet-boarding-system
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.js
├── prisma
│   ├── migrations
│   │   ├── 20241208121707_init
│   │   │   └── migration.sql
│   │   ├── 20241208124443_add_password_reset
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   └── favicon.ico
├── README.md
├── src
│   ├── app
│   │   ├── _components
│   │   │   └── post.tsx
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   ├── [...nextauth]
│   │   │   │   │   └── route.ts
│   │   │   │   ├── forgot-password
│   │   │   │   │   └── route.ts
│   │   │   │   ├── reset-password
│   │   │   │   │   └── route.ts
│   │   │   │   └── signup
│   │   │   │       └── route.ts
│   │   │   └── trpc
│   │   │       └── [trpc]
│   │   │           └── route.ts
│   │   ├── auth
│   │   │   ├── forgot-password
│   │   │   │   └── page.tsx
│   │   │   ├── reset-password
│   │   │   │   └── page.tsx
│   │   │   ├── signin
│   │   │   │   └── page.tsx
│   │   │   └── signup
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── layout.tsx
│   │   │   └── navbar.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── spinner.tsx
│   │       └── table.tsx
│   ├── env.js
│   ├── server
│   │   ├── api
│   │   │   ├── root.ts
│   │   │   ├── routers
│   │   │   │   ├── booking.ts
│   │   │   │   ├── facility.ts
│   │   │   │   ├── payment.ts
│   │   │   │   ├── pet.ts
│   │   │   │   ├── post.ts
│   │   │   │   └── user.ts
│   │   │   └── trpc.ts
│   │   ├── auth
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   └── db.ts
│   ├── styles
│   │   └── globals.css
│   ├── trpc
│   │   ├── query-client.ts
│   │   ├── react.tsx
│   │   └── server.ts
│   └── utils
│       └── cn.ts
├── start-database.sh
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/next.config.js`:

```js
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {};

export default config;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/package.json`:

```json
{
  "name": "pet-boarding-system",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "next build",
    "check": "next lint && tsc --noEmit",
    "db:generate": "prisma migrate dev",
    "db:migrate": "prisma migrate deploy",
    "db:push": "prisma db push",
    "db:studio": "prisma studio",
    "dev": "next dev --turbo",
    "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
    "format:write": "prettier --write \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
    "postinstall": "prisma generate",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "preview": "next build && next start",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@auth/prisma-adapter": "^2.7.2",
    "@prisma/client": "^5.14.0",
    "@sentry/nextjs": "^8.42.0",
    "@t3-oss/env-nextjs": "^0.10.1",
    "@tanstack/react-query": "^5.50.0",
    "@trpc/client": "^11.0.0-rc.446",
    "@trpc/react-query": "^11.0.0-rc.446",
    "@trpc/server": "^11.0.0-rc.446",
    "@upstash/ratelimit": "^2.0.5",
    "bcrypt": "^5.1.1",
    "clsx": "^2.1.1",
    "geist": "^1.3.0",
    "ioredis": "^5.4.1",
    "next": "^15.0.1",
    "next-auth": "5.0.0-beta.25",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "server-only": "^0.0.1",
    "stripe": "^17.4.0",
    "superjson": "^2.2.1",
    "tailwind-merge": "^2.5.5",
    "zod": "^3.23.3"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/eslint": "^8.56.10",
    "@types/node": "^20.14.10",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^8.1.0",
    "@typescript-eslint/parser": "^8.1.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.0.1",
    "postcss": "^8.4.39",
    "prettier": "^3.3.2",
    "prettier-plugin-tailwindcss": "^0.6.5",
    "prisma": "^5.14.0",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.5.3"
  },
  "ct3aMetadata": {
    "initVersion": "7.38.1"
  },
  "packageManager": "pnpm@9.14.2"
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
  },
};

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/prettier.config.js`:

```js
/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
};

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/prisma/migrations/20241208124443_add_password_reset/migration.sql`:

```sql
-- CreateTable
CREATE TABLE "PasswordReset" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PasswordReset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PasswordReset_token_key" ON "PasswordReset"("token");

-- CreateIndex
CREATE INDEX "PasswordReset_token_idx" ON "PasswordReset"("token");

-- CreateIndex
CREATE INDEX "PasswordReset_userId_idx" ON "PasswordReset"("userId");

-- AddForeignKey
ALTER TABLE "PasswordReset" ADD CONSTRAINT "PasswordReset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/prisma/migrations/migration_lock.toml`:

```toml
# Please do not edit this file manually
# It should be added in your version-control system (i.e. Git)
provider = "postgresql"
```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/README.md`:

```md
# Create T3 App|

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/_components/post.tsx`:

```tsx
"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full px-4 py-2 text-black"
        />
        <button
          type="submit"
          className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/[...nextauth]/route.ts`:

```ts
import { handlers } from "~/server/auth";

export const { GET, POST } = handlers;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/forgot-password/route.ts`:

```ts
import { randomBytes } from "crypto";
import { type NextRequest } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = {
      email: formData.get("email"),
    };

    const result = forgotPasswordSchema.safeParse(data);
    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 },
      );
    }

    const user = await db.user.findUnique({
      where: { email: result.data.email },
    });

    if (!user) {
      // Don't reveal that the email doesn't exist
      return Response.json(
        { message: "If an account exists with this email, you will receive a password reset link" },
        { status: 200 },
      );
    }

    const token = randomBytes(32).toString("hex");
    const expires = new Date();
    expires.setHours(expires.getHours() + 1); // Token expires in 1 hour

    await db.passwordReset.create({
      data: {
        token,
        expires,
        userId: user.id,
      },
    });

    // TODO: Send email with reset link
    // For now, just redirect to the reset page with the token
    return Response.redirect(
      new URL(`/auth/reset-password?token=${token}`, req.url),
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/reset-password/route.ts`:

```ts
import { hash } from "bcrypt";
import { type NextRequest } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = {
      token: formData.get("token"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const result = resetPasswordSchema.safeParse(data);
    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 },
      );
    }

    const passwordReset = await db.passwordReset.findFirst({
      where: {
        token: result.data.token,
        expires: { gt: new Date() },
        used: false,
      },
      include: { user: true },
    });

    if (!passwordReset) {
      return Response.json(
        { error: "Invalid or expired token" },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(result.data.password, 10);
    await db.$transaction([
      db.user.update({
        where: { id: passwordReset.userId },
        data: { password: hashedPassword },
      }),
      db.passwordReset.update({
        where: { id: passwordReset.id },
        data: { used: true },
      }),
    ]);

    return Response.redirect(new URL("/auth/signin", req.url));
  } catch (error) {
    console.error("Reset password error:", error);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/auth/signup/route.ts`:

```ts
import { hash } from "bcrypt";
import { type NextRequest } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const result = signUpSchema.safeParse(data);
    if (!result.success) {
      return Response.json(
        { error: result.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 },
      );
    }

    const existingUser = await db.user.findUnique({
      where: { email: result.data.email },
    });

    if (existingUser) {
      return Response.json(
        { error: "Email already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await hash(result.data.password, 10);
    await db.user.create({
      data: {
        name: result.data.name,
        email: result.data.email,
        password: hashedPassword,
        role: "CUSTOMER",
      },
    });

    return Response.redirect(new URL("/auth/signin", req.url));
  } catch (error) {
    console.error("Sign up error:", error);
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/api/trpc/[trpc]/route.ts`:

```ts
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

import { env } from "~/env";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
  });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/auth/forgot-password/page.tsx`:

```tsx
import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Form, FormField, FormSection } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export const metadata: Metadata = {
  title: "Forgot Password - Pet Boarding",
  description: "Reset your password",
};

export default async function ForgotPasswordPage() {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader
          title="Forgot Password"
          description="Enter your email address and we'll send you a link to reset your password."
        />
        <CardContent>
          <Form action="/api/auth/forgot-password" method="POST">
            <FormSection>
              <FormField>
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </FormField>
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </FormSection>
          </Form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Remember your password?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/auth/reset-password/page.tsx`:

```tsx
import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Form, FormField, FormSection } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export const metadata: Metadata = {
  title: "Reset Password - Pet Boarding",
  description: "Create a new password",
};

interface Props {
  searchParams: {
    token?: string;
  };
}

export default async function ResetPasswordPage({ searchParams }: Props) {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }

  if (!searchParams.token) {
    redirect("/auth/forgot-password");
  }

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader
          title="Reset Password"
          description="Enter your new password below."
        />
        <CardContent>
          <Form action="/api/auth/reset-password" method="POST">
            <input type="hidden" name="token" value={searchParams.token} />
            <FormSection>
              <FormField>
                <Input
                  label="New Password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                />
              </FormField>
              <FormField>
                <Input
                  label="Confirm New Password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                />
              </FormField>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </FormSection>
          </Form>
          <p className="mt-6 text-center text-sm text-gray-500">
            Remember your password?{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/app/layout.tsx`:

```tsx
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/layout/layout.tsx`:

```tsx
import { type PropsWithChildren } from "react";
import { Navbar } from "./navbar";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/layout/navbar.tsx`:

```tsx
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Role } from "@prisma/client";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
  >
    {children}
  </Link>
);

export function Navbar() {
  const { data: session } = useSession();
  const userRole = session?.user?.role as Role | undefined;

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Pet Boarding</span>
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              {session ? (
                <>
                  {userRole === Role.CUSTOMER && (
                    <>
                      <NavLink href="/pets">My Pets</NavLink>
                      <NavLink href="/bookings">My Bookings</NavLink>
                    </>
                  )}
                  {[Role.STAFF, Role.MANAGER, Role.ADMIN].includes(userRole!) && (
                    <>
                      <NavLink href="/dashboard">Dashboard</NavLink>
                      <NavLink href="/bookings/manage">Manage Bookings</NavLink>
                    </>
                  )}
                  {[Role.MANAGER, Role.ADMIN].includes(userRole!) && (
                    <NavLink href="/facility">Facility</NavLink>
                  )}
                  {userRole === Role.ADMIN && (
                    <NavLink href="/admin">Admin</NavLink>
                  )}
                </>
              ) : null}
            </div>
          </div>
          <div className="flex items-center">
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">
                  {session.user?.name ?? session.user?.email}
                </span>
                <button
                  onClick={() => void signOut()}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-500"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => void signIn()}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/button.tsx`:

```tsx
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-500",
      secondary: "bg-gray-600 text-white hover:bg-gray-500",
      danger: "bg-red-600 text-white hover:bg-red-500",
      ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled ?? isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  },
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/card.tsx`:

```tsx
import { type HTMLAttributes } from "react";
import { cn } from "~/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section";
}

export function Card({
  as: Component = "div",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function CardHeader({
  title,
  description,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-6", className)} {...props} />
  );
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-6", className)}
      {...props}
    />
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/form.tsx`:

```tsx
import { type ReactNode } from "react";
import { cn } from "~/utils/cn";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ className, children, ...props }: FormProps) {
  return (
    <form className={cn("space-y-6", className)} {...props}>
      {children}
    </form>
  );
}

interface FormSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function FormSection({
  title,
  description,
  children,
  className,
}: FormSectionProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {(title || description) && (
        <div>
          {title && (
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
      <div className="space-y-6">{children}</div>
    </div>
  );
}

interface FormRowProps {
  children: ReactNode;
  className?: string;
}

export function FormRow({ children, className }: FormRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface FormFieldProps {
  children: ReactNode;
  span?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function FormField({
  children,
  span = 6,
  className,
}: FormFieldProps) {
  return (
    <div
      className={cn(
        "sm:col-span-" + span,
        className,
      )}
    >
      {children}
    </div>
  );
}

interface FormActionsProps {
  children: ReactNode;
  className?: string;
}

export function FormActions({ children, className }: FormActionsProps) {
  return (
    <div
      className={cn(
        "flex justify-end space-x-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/input.tsx`:

```tsx
import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            error && "border-red-300 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/select.tsx`:

```tsx
import { type SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "~/utils/cn";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <select
          className={cn(
            "block w-full rounded-md border-gray-300 shadow-sm",
            "focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            error && "border-red-300 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/spinner.tsx`:

```tsx
import { cn } from "~/utils/cn";

interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Spinner({ className, size = "md" }: SpinnerProps) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div role="status">
      <svg
        className={cn(
          "animate-spin text-gray-200 dark:text-gray-600",
          "fill-indigo-600",
          sizes[size],
          className,
        )}
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/components/ui/table.tsx`:

```tsx
import { type ReactNode } from "react";
import { cn } from "~/utils/cn";

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export function Table({ className, children, ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          "min-w-full divide-y divide-gray-300",
          className,
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

interface TableHeaderProps {
  children: ReactNode;
  className?: string;
}

export function TableHeader({ children, className }: TableHeaderProps) {
  return (
    <thead className={cn("bg-gray-50", className)}>
      <tr>{children}</tr>
    </thead>
  );
}

interface TableBodyProps {
  children: ReactNode;
  className?: string;
}

export function TableBody({ children, className }: TableBodyProps) {
  return (
    <tbody
      className={cn(
        "divide-y divide-gray-200 bg-white",
        className,
      )}
    >
      {children}
    </tbody>
  );
}

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr
      className={cn(
        "hover:bg-gray-50",
        className,
      )}
    >
      {children}
    </tr>
  );
}

interface TableHeaderCellProps {
  children: ReactNode;
  className?: string;
}

export function TableHeaderCell({
  children,
  className,
}: TableHeaderCellProps) {
  return (
    <th
      scope="col"
      className={cn(
        "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
        className,
      )}
    >
      {children}
    </th>
  );
}

interface TableCellProps {
  children: ReactNode;
  className?: string;
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <td
      className={cn(
        "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
        className,
      )}
    >
      {children}
    </td>
  );
}

interface TableEmptyProps {
  colSpan: number;
  message?: string;
  className?: string;
}

export function TableEmpty({
  colSpan,
  message = "No data available",
  className,
}: TableEmptyProps) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className={cn(
          "px-3 py-8 text-center text-sm text-gray-500",
          className,
        )}
      >
        {message}
      </td>
    </tr>
  );
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/env.js`:

```js
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    AUTH_DISCORD_ID: z.string(),
    AUTH_DISCORD_SECRET: z.string(),
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/root.ts`:

```ts
import { postRouter } from "~/server/api/routers/post";
import { userRouter } from "~/server/api/routers/user";
import { petRouter } from "~/server/api/routers/pet";
import { bookingRouter } from "~/server/api/routers/booking";
import { facilityRouter } from "~/server/api/routers/facility";
import { paymentRouter } from "~/server/api/routers/payment";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  user: userRouter,
  pet: petRouter,
  booking: bookingRouter,
  facility: facilityRouter,
  payment: paymentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/facility.ts`:

```ts
import { z } from "zod";
import { TRPCError } from "@trpc/server";

import {
  createTRPCRouter,
  protectedProcedure,
  managerProcedure,
} from "~/server/api/trpc";

const facilityUpdateSchema = z.object({
  capacity: z.number().int().min(1).optional(),
  pricing: z.number().min(0).optional(),
});

export const facilityRouter = createTRPCRouter({
  update: managerProcedure
    .input(facilityUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const facility = await ctx.db.facility.findFirst();

      if (!facility) {
        return ctx.db.facility.create({
          data: {
            capacity: input.capacity ?? 10,
            pricing: input.pricing ?? 50.00,
          },
        });
      }

      return ctx.db.facility.update({
        where: { id: facility.id },
        data: input,
      });
    }),

  get: protectedProcedure.query(async ({ ctx }) => {
    const facility = await ctx.db.facility.findFirst();

    if (!facility) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Facility configuration not found",
      });
    }

    return facility;
  }),

  availability: protectedProcedure
    .input(
      z.object({
        startDate: z.date(),
        endDate: z.date(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const facility = await ctx.db.facility.findFirst();
      if (!facility) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Facility configuration not found",
        });
      }

      const bookings = await ctx.db.booking.findMany({
        where: {
          OR: [
            {
              startDate: {
                lte: input.endDate,
              },
              endDate: {
                gte: input.startDate,
              },
            },
          ],
          status: {
            in: ["PENDING", "APPROVED", "CHECKED_IN"],
          },
        },
      });

      const dates = [];
      let currentDate = new Date(input.startDate);
      while (currentDate <= input.endDate) {
        const bookingsOnDate = bookings.filter((booking) => {
          const bookingStart = new Date(booking.startDate);
          const bookingEnd = new Date(booking.endDate);
          return currentDate >= bookingStart && currentDate <= bookingEnd;
        });

        dates.push({
          date: new Date(currentDate),
          available: facility.capacity - bookingsOnDate.length,
          total: facility.capacity,
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/pet.ts`:

```ts
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  staffProcedure,
} from "~/server/api/trpc";

const petCreateSchema = z.object({
  name: z.string().min(1).max(50),
  type: z.string().min(1).max(50),
  breed: z.string().min(1).max(50),
  age: z.number().int().min(0),
  ownerId: z.string().optional(), // Optional for staff to create for existing users
});

const petUpdateSchema = z.object({
  id: z.string(),
  name: z.string().min(1).max(50).optional(),
  type: z.string().min(1).max(50).optional(),
  breed: z.string().min(1).max(50).optional(),
  age: z.number().int().min(0).optional(),
});

export const petRouter = createTRPCRouter({
  create: protectedProcedure
    .input(petCreateSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.pet.create({
        data: {
          ...input,
          ownerId: input.ownerId ?? ctx.session.user.id,
        },
      });
    }),

  update: protectedProcedure
    .input(petUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;
      
      // Verify ownership or staff status
      const pet = await ctx.db.pet.findUnique({
        where: { id },
        select: { ownerId: true },
      });

      if (!pet) {
        throw new Error("Pet not found");
      }

      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role === "CUSTOMER"
      ) {
        throw new Error("Not authorized");
      }

      return ctx.db.pet.update({
        where: { id },
        data: updateData,
      });
    }),

  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Verify ownership or staff status
      const pet = await ctx.db.pet.findUnique({
        where: { id: input.id },
        select: { ownerId: true },
      });

      if (!pet) {
        throw new Error("Pet not found");
      }

      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role === "CUSTOMER"
      ) {
        throw new Error("Not authorized");
      }

      return ctx.db.pet.delete({
        where: { id: input.id },
      });
    }),

  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const pet = await ctx.db.pet.findUnique({
        where: { id: input.id },
        include: {
          owner: {
            select: {
              id: true,
              email: true,
            },
          },
          bookings: {
            select: {
              id: true,
              startDate: true,
              endDate: true,
              status: true,
            },
          },
        },
      });

      if (!pet) {
        throw new Error("Pet not found");
      }

      // Only allow owner or staff to view details
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role === "CUSTOMER"
      ) {
        throw new Error("Not authorized");
      }

      return pet;
    }),

  all: staffProcedure.query(async ({ ctx }) => {
    return ctx.db.pet.findMany({
      include: {
        owner: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });
  }),

  myPets: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.pet.findMany({
      where: {
        ownerId: ctx.session.user.id,
      },
      include: {
        bookings: {
          select: {
            id: true,
            startDate: true,
            endDate: true,
            status: true,
          },
        },
      },
    });
  }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/post.ts`:

```ts
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/api/routers/user.ts`:

```ts
import { z } from "zod";
import { hash } from "bcrypt";

import {
  createTRPCRouter,
  protectedProcedure,
  adminProcedure,
} from "~/server/api/trpc";
import { Role } from "@prisma/client";

const userCreateSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.nativeEnum(Role).default(Role.CUSTOMER),
  staffLevel: z.number().optional(),
});

const userUpdateSchema = z.object({
  id: z.string(),
  email: z.string().email().optional(),
  role: z.nativeEnum(Role).optional(),
  staffLevel: z.number().optional(),
});

export const userRouter = createTRPCRouter({
  create: adminProcedure
    .input(userCreateSchema)
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await hash(input.password, 10);
      return ctx.db.user.create({
        data: {
          ...input,
          hashedPassword,
        },
        select: {
          id: true,
          email: true,
          role: true,
          staffLevel: true,
        },
      });
    }),

  update: adminProcedure
    .input(userUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;
      return ctx.db.user.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          email: true,
          role: true,
          staffLevel: true,
        },
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.delete({
        where: { id: input.id },
      });
    }),

  me: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: {
        id: true,
        email: true,
        role: true,
        staffLevel: true,
        pets: {
          select: {
            id: true,
            name: true,
            type: true,
            breed: true,
            age: true,
          },
        },
      },
    });
  }),

  all: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        staffLevel: true,
      },
    });
  }),
});

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/auth/config.ts`:

```ts
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    DiscordProvider,
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
} satisfies NextAuthConfig;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/auth/index.ts`:

```ts
import NextAuth from "next-auth";
import { cache } from "react";

import { authConfig } from "./config";

const { auth: uncachedAuth, handlers, signIn, signOut } = NextAuth(authConfig);

const auth = cache(uncachedAuth);

export { auth, handlers, signIn, signOut };

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/server/db.ts`:

```ts
import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/trpc/query-client.ts`:

```ts
import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import SuperJSON from "superjson";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 30 * 1000,
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/trpc/react.tsx`:

```tsx
"use client";

import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { useState } from "react";
import SuperJSON from "superjson";

import { type AppRouter } from "~/server/api/root";
import { createQueryClient } from "./query-client";

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient());
};

export const api = createTRPCReact<AppRouter>();

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          transformer: SuperJSON,
          url: getBaseUrl() + "/api/trpc",
          headers: () => {
            const headers = new Headers();
            headers.set("x-trpc-source", "nextjs-react");
            return headers;
          },
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  );
}

function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/trpc/server.ts`:

```ts
import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { headers } from "next/headers";
import { cache } from "react";

import { createCaller, type AppRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";
import { createQueryClient } from "./query-client";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");

  return createTRPCContext({
    headers: heads,
  });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient
);

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/src/utils/cn.ts`:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/start-database.sh`:

```sh
#!/usr/bin/env bash
# Use this script to start a docker container for a local development database

# TO RUN ON WINDOWS:
# 1. Install WSL (Windows Subsystem for Linux) - https://learn.microsoft.com/en-us/windows/wsl/install
# 2. Install Docker Desktop for Windows - https://docs.docker.com/docker-for-windows/install/
# 3. Open WSL - `wsl`
# 4. Run this script - `./start-database.sh`

# On Linux and macOS you can run this script directly - `./start-database.sh`

DB_CONTAINER_NAME="pet-boarding-system-postgres"

if ! [[ -x "$(command -v docker)" ]]; then
	echo -e "Docker is not installed. Please install docker and try again.\nDocker install guide: https://docs.docker.com/engine/install/"
	exit 1
fi

if ! docker info >/dev/null 2>&1; then
	echo "Docker daemon is not running. Please start Docker and try again."
	exit 1
fi

if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
	echo "Database container '$DB_CONTAINER_NAME' already running"
	exit 0
fi

if [ "$(docker ps -q -a -f name=$DB_CONTAINER_NAME)" ]; then
	docker start "$DB_CONTAINER_NAME"
	echo "Existing database container '$DB_CONTAINER_NAME' started"
	exit 0
fi

# import env variables from .env
set -a
source .env

DB_PASSWORD=$(echo "$DATABASE_URL" | awk -F':' '{print $3}' | awk -F'@' '{print $1}')
DB_PORT=$(echo "$DATABASE_URL" | awk -F':' '{print $4}' | awk -F'\/' '{print $1}')

if [ "$DB_PASSWORD" = "password" ]; then
	echo "You are using the default database password"
	read -p "Should we generate a random password for you? [y/N]: " -r REPLY
	if ! [[ $REPLY =~ ^[Yy]$ ]]; then
		echo "Please change the default password in the .env file and try again"
		exit 1
	fi
	# Generate a random URL-safe password
	DB_PASSWORD=$(openssl rand -base64 12 | tr '+/' '-_')
	sed -i -e "s#:password@#:$DB_PASSWORD@#" .env
fi

docker run -d \
	--name $DB_CONTAINER_NAME \
	-e POSTGRES_USER="postgres" \
	-e POSTGRES_PASSWORD="$DB_PASSWORD" \
	-e POSTGRES_DB=pet-boarding-system \
	-p "$DB_PORT":5432 \
	docker.io/postgres && echo "Database container '$DB_CONTAINER_NAME' was successfully created"
```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/tailwind.config.ts`:

```ts
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/tsconfig.json`:

```json
{
  "compilerOptions": {
    /* Base Options: */
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",
    "isolatedModules": true,

    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "checkJs": true,

    /* Bundled projects */
    "lib": ["dom", "dom.iterable", "ES2022"],
    "noEmit": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "plugins": [{ "name": "next" }],
    "incremental": true,

    /* Path Aliases */
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  },
  "include": [
    ".eslintrc.cjs",
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    "**/*.cjs",
    "**/*.js",
    ".next/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}

```

`/Volumes/LaCie/Dropbox/GitHub/pet-boarding-system/vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}

```
```

`/Users/oscarvuong/doggo hotel/consolidated_prd.md`:

```md
# **Product Requirements Document (PRD): Doggo Hotel - Pet Boarding Management System**

## **1. Executive Summary**

### **1.1 Product Vision**
A modern, secure, and scalable dog boarding facility management system built with the T3 Stack, providing comprehensive solutions for pet boarding facilities, their staff, and pet owners.

### **1.2 Core Technology Stack**
- **Frontend**: Next.js, TypeScript, TailwindCSS, Radix UI
- **Backend**: tRPC, Prisma, PostgreSQL
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe
- **State Management**: React Query
- **Package Management**: pnpm

## **2. System Architecture**

### **2.1 Microservices Architecture**
- User Service
- Pet Service
- Kennel Service
- Reservation Service
- Payment Service 
- Facility Service

### **2.2 Database Design**
- PostgreSQL with Prisma ORM
- Multi-tenant architecture
- Soft deletion support
- Comprehensive audit logging
- Role-based access control

## **3. Core Features & Implementation**

### **3.1 Authentication & Authorization**
- **Technology**: NextAuth.js with JWT strategy
- **Role Hierarchy**:
  - System Admin
  - Franchise Owner
  - Facility Admin
  - Manager
  - Staff
  - PetOwner
- **Permission Management**:
  - Role-based access control (RBAC)
  - Temporary permission support
  - Audit logging for all permission changes

### **3.2 Pet Management**
- **Features**:
  - Comprehensive pet profiles
  - Vaccination tracking
  - Medical history
  - Dietary preferences
  - Behavioral notes
  - Emergency contact information
- **Implementation**:
  - Type-safe API with tRPC
  - Real-time validation with Zod
  - Automated vaccination reminders

### **3.3 Reservation System**
- **Features**:
  - Real-time availability checking
  - Waitlist management
  - Conflict resolution
  - Add-on services
  - Dynamic pricing
- **Status Flow**:
  - PENDING → CONFIRMED → CHECKED_IN → CHECKED_OUT
  - CANCELLED (can occur at any stage)

### **3.4 Payment Processing**
- **Integration**: Stripe API
- **Features**:
  - Secure payment processing
  - Multiple payment methods
  - Automated invoicing
  - Refund management
  - Payment status tracking
- **Status Types**:
  - PENDING
  - PAID
  - REFUNDED
  - FAILED

### **3.5 Facility Management**
- **Features**:
  - Multi-location support
  - Kennel management
  - Staff scheduling
  - Operating hours
  - Capacity planning
- **Kennel Categories**:
  - SMALL
  - MEDIUM
  - LARGE
  - EXTRA_LARGE

### **3.6 Dashboard & Analytics**
- **Metrics**:
  - Occupancy rates
  - Revenue tracking
  - Booking trends
  - Customer analytics
- **Visualization**:
  - Interactive charts with Recharts
  - Real-time updates
  - Role-specific views

## **4. User Interfaces**

### **4.1 Component Architecture**
- Atomic design principles
- Reusable UI components
- Responsive layouts
- Accessibility compliance

### **4.2 Role-Specific Dashboards**
- **Admin Dashboard**:
  - System-wide metrics
  - User management
  - Configuration settings
- **Staff Dashboard**:
  - Daily tasks
  - Check-in/out management
  - Kennel status
- **Pet Owner Dashboard**:
  - Reservation management
  - Pet profiles
  - Payment history

## **5. Forms & Documentation**

### **5.1 Digital Forms**
- Registration forms
- Pet intake forms
- Reservation forms
- Payment authorization forms
- Staff management forms

### **5.2 Legal Documentation**
- Liability waivers
- Boarding agreements
- Veterinary release forms
- Payment authorization forms
- Emergency contact forms

## **6. Security & Compliance**

### **6.1 Data Security**
- Encrypted data storage
- Secure session management
- Role-based access control
- Audit logging

### **6.2 Business Rules**
- Automated compliance checks
- Vaccination verification
- Payment authorization
- Abandonment protocols

## **7. Technical Requirements**

### **7.1 Development Environment**
```bash
# Required software
Node.js 16+
PostgreSQL
pnpm
Stripe CLI
```

### **7.2 Environment Variables**
```env
DATABASE_URL
NEXTAUTH_SECRET
NEXTAUTH_URL
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
STRIPE_PUBLIC_KEY
```

## **8. Deployment & Scaling**

### **8.1 Infrastructure**
- Containerized deployment
- Horizontal scaling support
- Redis caching layer
- Message queue system

### **8.2 Performance Requirements**
- Sub-second response times
- 99.9% uptime
- Automatic failover
- Regular backups

## **9. Future Enhancements**

- Mobile application
- AI-driven demand forecasting
- Automated task workflows
- Integration with veterinary systems
- Multi-language support
- Advanced analytics dashboard

## **10. Success Metrics**

- System uptime
- User satisfaction rates
- Processing time for bookings
- Revenue per available kennel
- Customer retention rate
- Staff efficiency metrics 
```

`/Users/oscarvuong/doggo hotel/README.md`:

```md
# 🐕 Doggo Hotel - Pet Boarding Management System

A comprehensive dog boarding facility management system built with the T3 Stack. This system allows pet owners to book boarding services for their dogs, while providing staff with tools to manage kennels, reservations, and payments.

## 🌟 Features

### For Pet Owners

- 🐾 Register and manage multiple pets
- 📅 Book boarding reservations
- 💳 Process payments securely
- 📱 View booking history and status
- 🏷️ Add special care instructions

### For Staff

- 🏠 Manage kennel availability
- ✅ Process check-ins and check-outs
- 📊 View daily occupancy
- 🔔 Receive booking notifications
- 📝 Update booking status

### For Managers/Admins

- 👥 Manage staff accounts
- 💰 Set pricing and services
- 📈 View reports and analytics
- ⚙️ Configure facility settings
- 🏷️ Manage add-on services

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) with [TypeScript](https://www.typescriptlang.org)
- **API**: [tRPC](https://trpc.io) for end-to-end type safety
- **Database**: [PostgreSQL](https://www.postgresql.org) with [Prisma](https://prisma.io)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Payments**: [Stripe](https://stripe.com)
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Custom components with Radix UI primitives

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL
- pnpm
- Stripe account (for payments)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/doggo-hotel.git
cd doggo-hotel
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Update the .env file with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/doggo_hotel"

# NextAuth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
STRIPE_PUBLIC_KEY="your-stripe-public-key"
```

5. Initialize the database:

```bash
pnpm db:push   # Push the schema to the database
pnpm db:seed   # Seed initial data
```

6. Start the development server:

```bash
pnpm dev
```

## 📁 Project Structure

```
doggo-hotel/
├── prisma/                # Database schema and migrations
│   ├── schema.prisma     # Database schema
│   └── seed.ts          # Seed data
├── public/               # Static files
├── src/
│   ├── components/       # React components
│   │   ├── forms/       # Form components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # UI components
│   ├── pages/           # Next.js pages
│   │   ├── api/         # API routes
│   │   ├── auth/        # Authentication pages
│   │   └── dashboard/   # Dashboard pages
│   ├── server/          # Server-side code
│   │   ├── api/         # tRPC API definitions
│   │   └── auth.ts      # Authentication configuration
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
└── package.json         # Project dependencies
```

## 🔐 Authentication

The system uses NextAuth.js with a custom credential provider:

- **Roles**: PET_OWNER, STAFF, MANAGER, ADMIN
- **Sessions**: JWT-based with role information
- **Registration**: Custom implementation with password hashing
- **Protection**: Route-based and component-level protection

## 📊 Database Schema

Key models in the system:

- **User**: Account information and role
- **Pet**: Pet profiles and medical information
- **Kennel**: Boarding spaces and availability
- **Reservation**: Booking information
- **Payment**: Transaction records
- **Facility**: Location and operating hours
- **AddOnService**: Additional services

## 🔄 API Routes

The system uses tRPC for type-safe API routes:

- **/api/auth**: Authentication and user management
- **/api/pets**: Pet profile management
- **/api/kennels**: Kennel management
- **/api/reservations**: Booking management
- **/api/payments**: Payment processing

## 💳 Payment Integration

Stripe integration for secure payments:

- Secure payment processing
- Webhook handling
- Refund management
- Payment history

## 📱 Responsive Design

The system is fully responsive with:

- Mobile-first approach
- Responsive navigation
- Touch-friendly interfaces
- Adaptive layouts

## 🧪 Testing

Run the test suite:

```bash
pnpm test        # Run all tests
pnpm test:watch  # Run tests in watch mode
```

## 🚀 Deployment

1. Build the application:

```bash
pnpm build
```

2. Start the production server:

```bash
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- T3 Stack creators
- NextAuth.js team
- Prisma team
- Tailwind CSS team
- Stripe team

## 📞 Support

For support, email support@doggohotel.com or join our Slack channel.

```

`/Users/oscarvuong/doggo hotel/tailwind.config.ts`:

```ts
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

```

`/Users/oscarvuong/doggo hotel/package-lock.json`:

```json
{
  "name": "doggo-hotel",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "doggo-hotel",
      "version": "0.1.0",
      "hasInstallScript": true,
      "dependencies": {
        "@hookform/resolvers": "^3.10.0",
        "@next-auth/prisma-adapter": "^1.0.7",
        "@prisma/client": "^6.3.0",
        "@stripe/react-stripe-js": "^3.1.1",
        "@stripe/stripe-js": "^5.4.0",
        "@tanstack/react-query": "^4.36.1",
        "@trpc/client": "^10.43.6",
        "@trpc/next": "^10.43.6",
        "@trpc/react-query": "^10.43.6",
        "@trpc/server": "^10.43.6",
        "@types/bcrypt": "^5.0.2",
        "@types/react-datepicker": "^7.0.0",
        "bcrypt": "^5.1.1",
        "class-variance-authority": "^0.7.1",
        "clsx": "^2.1.1",
        "date-fns": "^4.1.0",
        "lucide-react": "^0.469.0",
        "next": "^15.1.6",
        "next-auth": "^4.24.5",
        "react": "18.2.0",
        "react-datepicker": "^7.6.0",
        "react-dom": "18.2.0",
        "react-hook-form": "^7.54.2",
        "react-hot-toast": "^2.5.1",
        "stripe": "^14.8.0",
        "superjson": "^2.2.1",
        "tailwind-merge": "^2.6.0",
        "zod": "^3.22.4"
      },
      "devDependencies": {
        "@types/eslint": "^8.44.7",
        "@types/node": "^18.17.0",
        "@types/react": "^18.2.37",
        "@types/react-dom": "^18.2.15",
        "@typescript-eslint/eslint-plugin": "^6.11.0",
        "@typescript-eslint/parser": "^6.11.0",
        "autoprefixer": "^10.4.14",
        "eslint": "^8.54.0",
        "eslint-config-next": "^14.0.4",
        "postcss": "^8.4.31",
        "prettier": "^3.1.0",
        "prettier-plugin-tailwindcss": "^0.5.7",
        "prisma": "^6.3.0",
        "tailwindcss": "^3.3.5",
        "ts-node": "^10.9.2",
        "typescript": "^5.1.6"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.26.7",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.26.7.tgz",
      "integrity": "sha512-AOPI3D+a8dXnja+iwsUqGRjr1BbZIe771sXdapOtYI531gSqpi92vXivKcq2asu/DFpdl1ceFAKZyRzK2PCVcQ==",
      "license": "MIT",
      "dependencies": {
        "regenerator-runtime": "^0.14.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@cspotcode/source-map-support/node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.3.1.tgz",
      "integrity": "sha512-kEBmG8KyqtxJZv+ygbEim+KCGtIq1fC22Ms3S4ziXmYKm8uyoLX0MHONVKwp+9opg390VaKRNt4a7A9NwmpNhw==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.1.tgz",
      "integrity": "sha512-s3O3waFUrMV8P/XaF/+ZTp1X9XBZW1a4B97ZnjQF2KYWaFD2A8KyFBsrsfSjEmjn3RGWAIuvlneuZm3CUK3jbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@floating-ui/core": {
      "version": "1.6.9",
      "resolved": "https://registry.npmjs.org/@floating-ui/core/-/core-1.6.9.tgz",
      "integrity": "sha512-uMXCuQ3BItDUbAMhIXw7UPXRfAlOAvZzdK9BWpE60MCn+Svt3aLn9jsPTi/WNGlRUu2uI0v5S7JiIUsbsvh3fw==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/utils": "^0.2.9"
      }
    },
    "node_modules/@floating-ui/dom": {
      "version": "1.6.13",
      "resolved": "https://registry.npmjs.org/@floating-ui/dom/-/dom-1.6.13.tgz",
      "integrity": "sha512-umqzocjDgNRGTuO7Q8CU32dkHkECqI8ZdMZ5Swb6QAM0t5rnlrN3lGo1hdpscRd3WS8T6DKYK4ephgIH9iRh3w==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/core": "^1.6.0",
        "@floating-ui/utils": "^0.2.9"
      }
    },
    "node_modules/@floating-ui/react": {
      "version": "0.27.3",
      "resolved": "https://registry.npmjs.org/@floating-ui/react/-/react-0.27.3.tgz",
      "integrity": "sha512-CLHnes3ixIFFKVQDdICjel8muhFLOBdQH7fgtHNPY8UbCNqbeKZ262G7K66lGQOUQWWnYocf7ZbUsLJgGfsLHg==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/react-dom": "^2.1.2",
        "@floating-ui/utils": "^0.2.9",
        "tabbable": "^6.0.0"
      },
      "peerDependencies": {
        "react": ">=17.0.0",
        "react-dom": ">=17.0.0"
      }
    },
    "node_modules/@floating-ui/react-dom": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.2.tgz",
      "integrity": "sha512-06okr5cgPzMNBy+Ycse2A6udMi4bqwW/zgBF/rwjcNqWkyr82Mcg8b0vjX8OJpZFy/FKjJmw6wV7t44kK6kW7A==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/dom": "^1.0.0"
      },
      "peerDependencies": {
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
      }
    },
    "node_modules/@floating-ui/utils": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.9.tgz",
      "integrity": "sha512-MDWhGtE+eHw5JW7lq4qhc5yRLS11ERl1c7Z6Xd0a58DozHES6EnNNwUWbMiG4J9Cgj053Bhk8zvlhFYKVhULwg==",
      "license": "MIT"
    },
    "node_modules/@hookform/resolvers": {
      "version": "3.10.0",
      "resolved": "https://registry.npmjs.org/@hookform/resolvers/-/resolvers-3.10.0.tgz",
      "integrity": "sha512-79Dv+3mDF7i+2ajj7SkypSKHhl1cbln1OGavqrsF7p6mbUv11xpqpacPsGDCTRvCSjEEIez2ef1NveSVL3b0Ag==",
      "license": "MIT",
      "peerDependencies": {
        "react-hook-form": "^7.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/config-array/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/@humanwhocodes/config-array/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.33.5.tgz",
      "integrity": "sha512-UT4p+iz/2H4twwAoLCqfA9UH5pI6DggwKEGuaPy7nCVQ8ZsiY5PIcrRvD1DzuY3qYL07NtIQcWnBSY/heikIFQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.33.5.tgz",
      "integrity": "sha512-fyHac4jIc1ANYGRDxtiqelIbdWkIuQaI84Mv45KvGRRxSAa7o7d1ZKAOBaYbnepLC1WqxfpimdeWfvqqSGwR2Q==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.0.4.tgz",
      "integrity": "sha512-XblONe153h0O2zuFfTAbQYAX2JhYmDHeWikp1LM9Hul9gVPjFY427k6dFEcOL72O01QxQsWi761svJ/ev9xEDg==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.0.4.tgz",
      "integrity": "sha512-xnGR8YuZYfJGmWPvmlunFaWJsb9T/AO2ykoP3Fz/0X5XV2aoYBPkX6xqCQvUTKKiLddarLaxpzNe+b1hjeWHAQ==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.0.5.tgz",
      "integrity": "sha512-gvcC4ACAOPRNATg/ov8/MnbxFDJqf/pDePbBnuBDcjsI8PssmjoKMAz4LtLaVi+OnSb5FK/yIOamqDwGmXW32g==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.0.4.tgz",
      "integrity": "sha512-9B+taZ8DlyyqzZQnoeIvDVR/2F4EbMepXMc/NdVbkzsJbzkUjhXv/70GQJ7tdLA4YJgNP25zukcxpX2/SueNrA==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.0.4.tgz",
      "integrity": "sha512-u7Wz6ntiSSgGSGcjZ55im6uvTrOxSIS8/dgoVMoiGE9I6JAfU50yH5BoDlYA1tcuGS7g/QNtetJnxA6QEsCVTA==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.0.4.tgz",
      "integrity": "sha512-MmWmQ3iPFZr0Iev+BAgVMb3ZyC4KeFc3jFxnNbEPas60e1cIfevbtuyf9nDGIzOaW9PdnDciJm+wFFaTlj5xYw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.0.4.tgz",
      "integrity": "sha512-9Ti+BbTYDcsbp4wfYib8Ctm1ilkugkA/uscUn6UXK1ldpC1JjiXbLfFZtRlBhjPZ5o1NCLiDbg8fhUPKStHoTA==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.0.4.tgz",
      "integrity": "sha512-viYN1KX9m+/hGkJtvYYp+CCLgnJXwiQB39damAO7WMdKWlIhmYTfHjwSbQeUK/20vY154mwezd9HflVFM1wVSw==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.33.5.tgz",
      "integrity": "sha512-JTS1eldqZbJxjvKaAkxhZmBqPRGmxgu+qFKSInv8moZ2AmT5Yib3EQ1c6gp493HvrvV8QgdOXdyaIBrhvFhBMQ==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.0.5"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.33.5.tgz",
      "integrity": "sha512-JMVv+AMRyGOHtO1RFBiJy/MBsgz0x4AWrT6QoEVVTyh1E39TrCUpTRI7mx9VksGX4awWASxqCYLCV4wBZHAYxA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.33.5.tgz",
      "integrity": "sha512-y/5PCd+mP4CA/sPDKl2961b+C9d+vPAveS33s6Z3zfASk2j5upL6fXVPZi7ztePZ5CuH+1kW8JtvxgbuXHRa4Q==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.33.5.tgz",
      "integrity": "sha512-opC+Ok5pRNAzuvq1AG0ar+1owsu842/Ab+4qvU879ippJBHvyY5n2mxF1izXqkPYlGuP/M556uh53jRLJmzTWA==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.33.5.tgz",
      "integrity": "sha512-XrHMZwGQGvJg2V/oRSUfSAfjfPxO+4DkiRh6p2AFjLQztWUuY/o8Mq0eMQVIY7HJ1CDQUJlxGGZRw1a5bqmd1g==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.33.5.tgz",
      "integrity": "sha512-WT+d/cgqKkkKySYmqoZ8y3pxx7lx9vVejxW/W4DOFMYVSkErR+w7mf2u8m/y4+xHe7yY9DAXQMWQhpnMuFfScw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.33.5.tgz",
      "integrity": "sha512-ykUW4LVGaMcU9lu9thv85CbRMAwfeadCJHRsg2GmeRa/cJxsVY9Rbd57JcMxBkKHag5U/x7TSBpScF4U8ElVzg==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.2.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.33.5.tgz",
      "integrity": "sha512-T36PblLaTwuVJ/zw/LaH0PdZkRz5rd3SmMHX8GSmR7vtNSP5Z6bQkExdSK7xGWyxLw4sUknBuugTelgw2faBbQ==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.33.5.tgz",
      "integrity": "sha512-MpY/o8/8kj+EcnxwvrP4aTJSWw/aZ7JIGR4aBeZkZw5B7/Jn+tY9/VNwtcoGmdT7GfggGIU4kygOMSbYnOrAbg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
      "integrity": "sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/set-array": "^1.2.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.25",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@mapbox/node-pre-gyp": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.11.tgz",
      "integrity": "sha512-Yhlar6v9WQgUp/He7BdgzOz8lqMQ8sU+jkCq7Wx8Myc5YFJLbEe7lgui/V7G1qB1DJykHSGwreceSaD60Y0PUQ==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "detect-libc": "^2.0.0",
        "https-proxy-agent": "^5.0.0",
        "make-dir": "^3.1.0",
        "node-fetch": "^2.6.7",
        "nopt": "^5.0.0",
        "npmlog": "^5.0.1",
        "rimraf": "^3.0.2",
        "semver": "^7.3.5",
        "tar": "^6.1.11"
      },
      "bin": {
        "node-pre-gyp": "bin/node-pre-gyp"
      }
    },
    "node_modules/@next-auth/prisma-adapter": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/@next-auth/prisma-adapter/-/prisma-adapter-1.0.7.tgz",
      "integrity": "sha512-Cdko4KfcmKjsyHFrWwZ//lfLUbcLqlyFqjd/nYE2m3aZ7tjMNUjpks47iw7NTCnXf+5UWz5Ypyt1dSs1EP5QJw==",
      "license": "ISC",
      "peerDependencies": {
        "@prisma/client": ">=2.26.0 || >=3",
        "next-auth": "^4"
      }
    },
    "node_modules/@next/env": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-15.1.6.tgz",
      "integrity": "sha512-d9AFQVPEYNr+aqokIiPLNK/MTyt3DWa/dpKveiAaVccUadFbhFEvY6FXYX2LJO2Hv7PHnLBu2oWwB4uBuHjr/w==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "14.2.23",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-14.2.23.tgz",
      "integrity": "sha512-efRC7m39GoiU1fXZRgGySqYbQi6ZyLkuGlvGst7IwkTTczehQTJA/7PoMg4MMjUZvZEGpiSEu+oJBAjPawiC3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "glob": "10.3.10"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-15.1.6.tgz",
      "integrity": "sha512-u7lg4Mpl9qWpKgy6NzEkz/w0/keEHtOybmIl0ykgItBxEM5mYotS5PmqTpo+Rhg8FiOiWgwr8USxmKQkqLBCrw==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-15.1.6.tgz",
      "integrity": "sha512-x1jGpbHbZoZ69nRuogGL2MYPLqohlhnT9OCU6E6QFewwup+z+M6r8oU47BTeJcWsF2sdBahp5cKiAcDbwwK/lg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-15.1.6.tgz",
      "integrity": "sha512-jar9sFw0XewXsBzPf9runGzoivajeWJUc/JkfbLTC4it9EhU8v7tCRLH7l5Y1ReTMN6zKJO0kKAGqDk8YSO2bg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-15.1.6.tgz",
      "integrity": "sha512-+n3u//bfsrIaZch4cgOJ3tXCTbSxz0s6brJtU3SzLOvkJlPQMJ+eHVRi6qM2kKKKLuMY+tcau8XD9CJ1OjeSQQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.1.6.tgz",
      "integrity": "sha512-SpuDEXixM3PycniL4iVCLyUyvcl6Lt0mtv3am08sucskpG0tYkW1KlRhTgj4LI5ehyxriVVcfdoxuuP8csi3kQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.1.6.tgz",
      "integrity": "sha512-L4druWmdFSZIIRhF+G60API5sFB7suTbDRhYWSjiw0RbE+15igQvE2g2+S973pMGvwN3guw7cJUjA/TmbPWTHQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-15.1.6.tgz",
      "integrity": "sha512-s8w6EeqNmi6gdvM19tqKKWbCyOBvXFbndkGHl+c9YrzsLARRdCHsD9S1fMj8gsXm9v8vhC8s3N8rjuC/XrtkEg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-15.1.6.tgz",
      "integrity": "sha512-6xomMuu54FAFxttYr5PJbEfu96godcxBTRk1OhAvJq0/EnmFU/Ybiax30Snis4vdWZ9LGpf7Roy5fSs7v/5ROQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@panva/hkdf": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@panva/hkdf/-/hkdf-1.2.1.tgz",
      "integrity": "sha512-6oclG6Y3PiDFcoyk8srjLfVKyMfVCKJ27JwNPViuXziFpmdz+MZnZN/aKY0JGXgYuO/VghU0jcOAZgWXZ1Dmrw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@prisma/client": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-6.3.0.tgz",
      "integrity": "sha512-BY3Fi28PUSk447Bpv22LhZp4HgNPo7NsEN+EteM1CLDnLjig5863jpW+3c3HHLFmml+nB/eJv1CjSriFZ8z7Cg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "peerDependencies": {
        "prisma": "*",
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@prisma/debug": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-6.3.0.tgz",
      "integrity": "sha512-m1lQv//0Rc5RG8TBpNUuLCxC35Ghi5XfpPmL83Gh04/GICHD2J5H2ndMlaljrUNaQDF9dOxIuFAYP1rE9wkXkg==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/engines": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-6.3.0.tgz",
      "integrity": "sha512-RXqYhlZb9sx/xkUfYIZuEPn7sT0WgTxNOuEYQ7AGw3IMpP9QGVEDVsluc/GcNkM8NTJszeqk8AplJzI9lm7Jxw==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.3.0",
        "@prisma/engines-version": "6.3.0-17.acc0b9dd43eb689cbd20c9470515d719db10d0b0",
        "@prisma/fetch-engine": "6.3.0",
        "@prisma/get-platform": "6.3.0"
      }
    },
    "node_modules/@prisma/engines-version": {
      "version": "6.3.0-17.acc0b9dd43eb689cbd20c9470515d719db10d0b0",
      "resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-6.3.0-17.acc0b9dd43eb689cbd20c9470515d719db10d0b0.tgz",
      "integrity": "sha512-R/ZcMuaWZT2UBmgX3Ko6PAV3f8//ZzsjRIG1eKqp3f2rqEqVtCv+mtzuH2rBPUC9ujJ5kCb9wwpxeyCkLcHVyA==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/fetch-engine": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-6.3.0.tgz",
      "integrity": "sha512-GBy0iT4f1mH31ePzfcpVSUa7JLRTeq4914FG2vR3LqDwRweSm4ja1o5flGDz+eVIa/BNYfkBvRRxv4D6ve6Eew==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.3.0",
        "@prisma/engines-version": "6.3.0-17.acc0b9dd43eb689cbd20c9470515d719db10d0b0",
        "@prisma/get-platform": "6.3.0"
      }
    },
    "node_modules/@prisma/get-platform": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-6.3.0.tgz",
      "integrity": "sha512-V8zZ1d0xfyi6FjpNP4AcYuwSpGcdmu35OXWnTPm8IW594PYALzKXHwIa9+o0f+Lo9AecFWrwrwaoYe56UNfTtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.3.0"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.10.5",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.10.5.tgz",
      "integrity": "sha512-kkKUDVlII2DQiKy7UstOR1ErJP8kUKAQ4oa+SQtM0K+lPdmmjj0YnnxBgtTVYH7mUKtbsxeFC9y0AmK7Yb78/A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@stripe/react-stripe-js": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/@stripe/react-stripe-js/-/react-stripe-js-3.1.1.tgz",
      "integrity": "sha512-+JzYFgUivVD7koqYV7LmLlt9edDMAwKH7XhZAHFQMo7NeRC+6D2JmQGzp9tygWerzwttwFLlExGp4rAOvD6l9g==",
      "license": "MIT",
      "dependencies": {
        "prop-types": "^15.7.2"
      },
      "peerDependencies": {
        "@stripe/stripe-js": "^1.44.1 || ^2.0.0 || ^3.0.0 || ^4.0.0 || ^5.0.0",
        "react": ">=16.8.0 <20.0.0",
        "react-dom": ">=16.8.0 <20.0.0"
      }
    },
    "node_modules/@stripe/stripe-js": {
      "version": "5.6.0",
      "resolved": "https://registry.npmjs.org/@stripe/stripe-js/-/stripe-js-5.6.0.tgz",
      "integrity": "sha512-w8CEY73X/7tw2KKlL3iOk679V9bWseE4GzNz3zlaYxcTjmcmWOathRb0emgo/QQ3eoNzmq68+2Y2gxluAv3xGw==",
      "license": "MIT",
      "engines": {
        "node": ">=12.16"
      }
    },
    "node_modules/@swc/counter": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz",
      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==",
      "license": "Apache-2.0"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tanstack/query-core": {
      "version": "4.36.1",
      "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-4.36.1.tgz",
      "integrity": "sha512-DJSilV5+ytBP1FbFcEJovv4rnnm/CokuVvrBEtW/Va9DvuJ3HksbXUJEpI0aV1KtuL4ZoO9AVE6PyNLzF7tLeA==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      }
    },
    "node_modules/@tanstack/react-query": {
      "version": "4.36.1",
      "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-4.36.1.tgz",
      "integrity": "sha512-y7ySVHFyyQblPl3J3eQBWpXZkliroki3ARnBKsdJchlgt7yJLRDUcf4B8soufgiYt3pEQIkBWBx1N9/ZPIeUWw==",
      "license": "MIT",
      "dependencies": {
        "@tanstack/query-core": "4.36.1",
        "use-sync-external-store": "^1.2.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/tannerlinsley"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0",
        "react-native": "*"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        },
        "react-native": {
          "optional": true
        }
      }
    },
    "node_modules/@trpc/client": {
      "version": "10.45.2",
      "resolved": "https://registry.npmjs.org/@trpc/client/-/client-10.45.2.tgz",
      "integrity": "sha512-ykALM5kYWTLn1zYuUOZ2cPWlVfrXhc18HzBDyRhoPYN0jey4iQHEFSEowfnhg1RvYnrAVjNBgHNeSAXjrDbGwg==",
      "funding": [
        "https://trpc.io/sponsor"
      ],
      "license": "MIT",
      "peerDependencies": {
        "@trpc/server": "10.45.2"
      }
    },
    "node_modules/@trpc/next": {
      "version": "10.45.2",
      "resolved": "https://registry.npmjs.org/@trpc/next/-/next-10.45.2.tgz",
      "integrity": "sha512-RSORmfC+/nXdmRY1pQ0AalsVgSzwNAFbZLYHiTvPM5QQ8wmMEHilseCYMXpu0se/TbPt9zVR6Ka2d7O6zxKkXg==",
      "funding": [
        "https://trpc.io/sponsor"
      ],
      "license": "MIT",
      "peerDependencies": {
        "@tanstack/react-query": "^4.18.0",
        "@trpc/client": "10.45.2",
        "@trpc/react-query": "10.45.2",
        "@trpc/server": "10.45.2",
        "next": "*",
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
      }
    },
    "node_modules/@trpc/react-query": {
      "version": "10.45.2",
      "resolved": "https://registry.npmjs.org/@trpc/react-query/-/react-query-10.45.2.tgz",
      "integrity": "sha512-BAqb9bGZIscroradlNx+Cc9522R+idY3BOSf5z0jHUtkxdMbjeGKxSSMxxu7JzoLqSIEC+LVzL3VvF8sdDWaZQ==",
      "funding": [
        "https://trpc.io/sponsor"
      ],
      "license": "MIT",
      "peerDependencies": {
        "@tanstack/react-query": "^4.18.0",
        "@trpc/client": "10.45.2",
        "@trpc/server": "10.45.2",
        "react": ">=16.8.0",
        "react-dom": ">=16.8.0"
      }
    },
    "node_modules/@trpc/server": {
      "version": "10.45.2",
      "resolved": "https://registry.npmjs.org/@trpc/server/-/server-10.45.2.tgz",
      "integrity": "sha512-wOrSThNNE4HUnuhJG6PfDRp4L2009KDVxsd+2VYH8ro6o/7/jwYZ8Uu5j+VaW+mOmc8EHerHzGcdbGNQSAUPgg==",
      "funding": [
        "https://trpc.io/sponsor"
      ],
      "license": "MIT"
    },
    "node_modules/@tsconfig/node10": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node10/-/node10-1.0.11.tgz",
      "integrity": "sha512-DcRjDCujK/kCk/cUe8Xz8ZSpm8mS3mNNpta+jGCA6USEDfktlNvm1+IuZ9eTcDbNk41BHwpHHeW+N1lKCz4zOw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node12": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/@tsconfig/node12/-/node12-1.0.11.tgz",
      "integrity": "sha512-cqefuRsh12pWyGsIoBKJA9luFu3mRxCA+ORZvA4ktLSzIuCUtWVxGIuXigEwO5/ywWFMZ2QEGKWvkZG1zDMTag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node14": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/@tsconfig/node14/-/node14-1.0.3.tgz",
      "integrity": "sha512-ysT8mhdixWK6Hw3i1V2AeRqZ5WfXg1G43mqoYlM2nc6388Fq5jcXyr5mRsqViLx/GJYdoL0bfXD8nmF+Zn/Iow==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tsconfig/node16": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@tsconfig/node16/-/node16-1.0.4.tgz",
      "integrity": "sha512-vxhUy4J8lyeyinH7Azl1pdd43GJhZH/tP2weN8TntQblOY+A0XbT8DJk1/oCPuOOyg/Ja757rG0CgHcWC8OfMA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/bcrypt": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/@types/bcrypt/-/bcrypt-5.0.2.tgz",
      "integrity": "sha512-6atioO8Y75fNcbmj0G7UjI9lXN2pQ/IGJ2FWT4a/btd0Lk9lQalHLKhkgKVZ3r+spnmWUKfbMi1GEe9wyHQfNQ==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/eslint": {
      "version": "8.56.12",
      "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-8.56.12.tgz",
      "integrity": "sha512-03ruubjWyOHlmljCVoxSuNDdmfZDzsrrz0P2LeJsOXr+ZwFQ+0yQIwNCwt/GYhV7Z31fgtXJTAEs+FYlEL851g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "*",
        "@types/json-schema": "*"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
      "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "18.19.74",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-18.19.74.tgz",
      "integrity": "sha512-HMwEkkifei3L605gFdV+/UwtpxP6JSzM+xFk2Ia6DNFSwSVBRh9qp5Tgf4lNFOMfPVuU0WnkcWpXZpgn5ufO4A==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~5.26.4"
      }
    },
    "node_modules/@types/prop-types": {
      "version": "15.7.14",
      "resolved": "https://registry.npmjs.org/@types/prop-types/-/prop-types-15.7.14.tgz",
      "integrity": "sha512-gNMvNH49DJ7OJYv+KAKn0Xp45p8PLl6zo2YnvDIbTd4J6MER2BmWN49TG7n9LvkyihINxeKW8+3bfS2yDC9dzQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "18.3.18",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.18.tgz",
      "integrity": "sha512-t4yC+vtgnkYjNSKlFx1jkAhH8LgTo2N/7Qvi83kdEaUtMDiwpbLAktKDaAMlRcJ5eSxZkH74eEGt1ky31d7kfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/prop-types": "*",
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-datepicker": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/@types/react-datepicker/-/react-datepicker-7.0.0.tgz",
      "integrity": "sha512-4tWwOUq589tozyQPBVEqGNng5DaZkomx5IVNuur868yYdgjH6RaL373/HKiVt1IDoNNXYiTGspm1F7kjrarM8Q==",
      "deprecated": "This is a stub types definition. react-datepicker provides its own type definitions, so you do not need this installed.",
      "license": "MIT",
      "dependencies": {
        "react-datepicker": "*"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "18.3.5",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-18.3.5.tgz",
      "integrity": "sha512-P4t6saawp+b/dFrUr2cvkVsfvPguwsxtH6dNIYRllMsefqFzkZk5UIjzyDOv5g1dXIPdG4Sp1yCR4Z6RCUsG/Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^18.0.0"
      }
    },
    "node_modules/@types/semver": {
      "version": "7.5.8",
      "resolved": "https://registry.npmjs.org/@types/semver/-/semver-7.5.8.tgz",
      "integrity": "sha512-I8EUhyrgfLrcTkzV3TSsGyl1tSuPrEDzr0yd5m90UgNxQkyDXULk3b6MlQqTCpZpNtWe1K0hzclnZkTcLBe2UQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-6.21.0.tgz",
      "integrity": "sha512-oy9+hTPCUFpngkEZUSzbf9MxI65wbKFoQYsgPdILTfbUldp5ovUuphZVe4i30emU9M/kP+T64Di0mxl7dSw3MA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.5.1",
        "@typescript-eslint/scope-manager": "6.21.0",
        "@typescript-eslint/type-utils": "6.21.0",
        "@typescript-eslint/utils": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0",
        "debug": "^4.3.4",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.4",
        "natural-compare": "^1.4.0",
        "semver": "^7.5.4",
        "ts-api-utils": "^1.0.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^6.0.0 || ^6.0.0-alpha",
        "eslint": "^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-6.21.0.tgz",
      "integrity": "sha512-tbsV1jPne5CkFQCgPBcDOt30ItF7aJoZL997JSF7MhGQqOeT3svWRYxiqlfA5RUdlHN6Fi+EI9bxqbdyAUZjYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/scope-manager": "6.21.0",
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/typescript-estree": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-6.21.0.tgz",
      "integrity": "sha512-OwLUIWZJry80O99zvqXVEioyniJMa+d2GrqpUTqi5/v5D5rOrppJVBPa0yKCblcigC0/aYAzxxqQ1B+DS2RYsg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-6.21.0.tgz",
      "integrity": "sha512-rZQI7wHfao8qMX3Rd3xqeYSMCL3SoiSQLBATSiVKARdFGCYSRvmViieZjqc58jKgs8Y8i9YvVVhRbHSTA4VBag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/typescript-estree": "6.21.0",
        "@typescript-eslint/utils": "6.21.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^1.0.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-6.21.0.tgz",
      "integrity": "sha512-1kFmZ1rOm5epu9NZEZm1kckCDGj5UJEf7P1kliH4LKu/RkwpsfqqGmY2OOcUs18lSlQBKLDYBOGxRVtrMN5lpg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-6.21.0.tgz",
      "integrity": "sha512-6npJTkZcO+y2/kr+z0hc4HwNfrrP4kNYh57ek7yCNlrBjWQ1Y0OS7jiZTkgumrvkX5HkEKXFZkkdFNkaW2wmUQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0",
        "debug": "^4.3.4",
        "globby": "^11.1.0",
        "is-glob": "^4.0.3",
        "minimatch": "9.0.3",
        "semver": "^7.5.4",
        "ts-api-utils": "^1.0.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-6.21.0.tgz",
      "integrity": "sha512-NfWVaC8HP9T8cbKQxHcsJBY5YE1O33+jpMwN45qzWWaPDZgLIbo12toGMWnmhvCpd3sIxkpDw3Wv1B3dYrbDQQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.4.0",
        "@types/json-schema": "^7.0.12",
        "@types/semver": "^7.5.0",
        "@typescript-eslint/scope-manager": "6.21.0",
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/typescript-estree": "6.21.0",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-6.21.0.tgz",
      "integrity": "sha512-JJtkDduxLi9bivAB+cYOVMtbkqdPOhZ+ZI5LC47MIRrDV4Yn2o+ZnW10Nkmr28xRpSpdJ6Sm42Hjf2+REYXm0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "6.21.0",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "license": "ISC"
    },
    "node_modules/acorn": {
      "version": "8.14.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
      "integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.4",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.4.tgz",
      "integrity": "sha512-ueEepnujpqee2o5aIYnvHU6C0A42MNdsIDeqy5BydrkuC5R1ZuUFnm27EeFJGoEHJQgn3uleRvmTXaJgfXbt4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "acorn": "^8.11.0"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/aproba": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",
      "integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==",
      "license": "ISC"
    },
    "node_modules/are-we-there-yet": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-2.0.0.tgz",
      "integrity": "sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "dependencies": {
        "delegates": "^1.0.0",
        "readable-stream": "^3.6.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.8",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.8.tgz",
      "integrity": "sha512-itaWrbYbqpGXkGhZPGUulwnhVf5Hpy1xiCFsGqyIGglbBxmG5vSjxQen3/WGOjPpNEv1RtBLKxbmVXm8HpJStQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "is-string": "^1.0.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.5.tgz",
      "integrity": "sha512-zfETvRFA8o7EiNn++N5f/kaCw221hrpGsDmcpndVupkPzEc1Wuf3VgC0qby1BbHs7f5DVYjgtEU2LLh5bqeGfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/autoprefixer": {
      "version": "10.4.20",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.20.tgz",
      "integrity": "sha512-XY25y5xSv/wEoqzDyXXME4AFfkZI0P23z6Fs3YgymDnKJkCGOnkL0iTxCa85UTqaSgfcqyf3UA6+c7wUvx/16g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.23.3",
        "caniuse-lite": "^1.0.30001646",
        "fraction.js": "^4.3.7",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.0.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.10.2",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.10.2.tgz",
      "integrity": "sha512-RE3mdQ7P3FRSe7eqCWoeQ/Z9QXrtniSjp1wUjt5nRC3WIpz5rSCve6o3fsZ2aCpJtrZjSZgjwXAoTO5k4tEI0w==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "license": "MIT"
    },
    "node_modules/bcrypt": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-5.1.1.tgz",
      "integrity": "sha512-AGBHOG5hPYZ5Xl9KXzU5iKq9516yEmvCKDg3ecP5kX2aB6UqTeXZxk2ELnDgDm6BQSMlLt9rDB4LoSMx0rYwww==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "@mapbox/node-pre-gyp": "^1.0.11",
        "node-addon-api": "^5.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
      "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.24.4",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.4.tgz",
      "integrity": "sha512-KDi1Ny1gSePi1vm0q4oxSF8b4DR44GF4BbmS2YdhPLOEqd8pDviZOGH/GsmRwoWJ2+5Lr085X7naowMwKHDG1A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "caniuse-lite": "^1.0.30001688",
        "electron-to-chromium": "^1.5.73",
        "node-releases": "^2.0.19",
        "update-browserslist-db": "^1.1.1"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/busboy": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz",
      "integrity": "sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==",
      "dependencies": {
        "streamsearch": "^1.1.0"
      },
      "engines": {
        "node": ">=10.16.0"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.8.tgz",
      "integrity": "sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.0",
        "es-define-property": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.1.tgz",
      "integrity": "sha512-BhYE+WDaywFg2TBWYNXAE+8B1ATnThNBqXHP5nQu0jWJdVvY2hvkpyB3qOmtmDePiS5/BDQ8wASEWGMWRG148g==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.3.tgz",
      "integrity": "sha512-YTd+6wGlNlPxSuri7Y6X8tY2dmm12UMH66RpKMhiX6rsk5wXXnYgbUcOt8kiS31/AjfoTOvCsE+w8nZQLQnzHA==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001696",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001696.tgz",
      "integrity": "sha512-pDCPkvzfa39ehJtJ+OwGT/2yvT2SbjfHhiIW2LWOAcMQ7BzwxT/XuyUp4OTOd0XFWA6BKw0JalnBHgSi5DGJBQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/chownr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/class-variance-authority": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz",
      "integrity": "sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==",
      "license": "Apache-2.0",
      "dependencies": {
        "clsx": "^2.1.1"
      },
      "funding": {
        "url": "https://polar.sh/cva"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/color-support": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",
      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",
      "license": "ISC",
      "bin": {
        "color-support": "bin.js"
      }
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "license": "MIT"
    },
    "node_modules/console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==",
      "license": "ISC"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/copy-anything": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/copy-anything/-/copy-anything-3.0.5.tgz",
      "integrity": "sha512-yCEafptTtb4bk7GLEQoM8KVJpxAfdBJYaXyzQEgQQQgYrZiDp8SJmGKlYza6CYjEDNstAdNdKA3UuoULlEbS6w==",
      "license": "MIT",
      "dependencies": {
        "is-what": "^4.1.8"
      },
      "engines": {
        "node": ">=12.13"
      },
      "funding": {
        "url": "https://github.com/sponsors/mesqueeb"
      }
    },
    "node_modules/create-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/create-require/-/create-require-1.1.1.tgz",
      "integrity": "sha512-dcKFX3jn0MpIaXjisoRvexIJVEKzaq7z2rZKxf+MSr9TkdmHmsU4m2lcLojrj/FHl8mk5VxMmYA+ftRkP/3oKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/date-fns": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-4.1.0.tgz",
      "integrity": "sha512-Ukq0owbQXxa/U3EGtsdVBkR1w7KOQ5gIBqdH2hkvknzZPYvBxb/aa6E8L7tmjFtkwZBu3UXBbjIgPo/Ez4xaNg==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/kossnocorp"
      }
    },
    "node_modules/debug": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
      "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==",
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.3.tgz",
      "integrity": "sha512-bwy0MGW55bG41VqxxypOsdSdGqLwXPI/focwgTYCFMbdUiBAxLg9CFzG08sz2aqzknwiX7Hkl0bQENjg8iLByw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/diff": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/diff/-/diff-4.0.2.tgz",
      "integrity": "sha512-58lmxKSA4BNyLz+HHMUzlOEpg09FV+ev6ZMe3vJihgdxzgcwZ8VoEEPmALCZG9LmqfVoNMMKpttIYTVG6uDY7A==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.90",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.90.tgz",
      "integrity": "sha512-C3PN4aydfW91Natdyd449Kw+BzhLmof6tzy5W1pFC5SpQxVXT+oyiyOG9AgYYSN9OdA/ik3YkCrpwqI8ug5Tug==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.0",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.0.tgz",
      "integrity": "sha512-0/r0MySGYG8YqlayBZ6MuCfECmHFdJ5qyPh8s8wa5Hnm6SaFLSK1VYCbj+NKp090Nm1caZhD+QTnmxO7esYGyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.23.9",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.23.9.tgz",
      "integrity": "sha512-py07lI0wjxAC/DcfK1S6G7iANonniZwTISvdPzk9hzeH0IZIshbuuFxLIU96OyF89Yb9hiqWn8M/bY83KY5vzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.0",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-regex": "^1.2.1",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.0",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.3",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.3",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.18"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.2.1.tgz",
      "integrity": "sha512-uDn+FE1yrDzyC0pCo961B2IHbdM8y/ACZsKD4dG6WqrjV53BADjwa7D+1aom2rsNVfLyDgU/eigvlJGJ08OQ4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.0.3",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.6",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.4",
        "safe-array-concat": "^1.1.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.0.2.tgz",
      "integrity": "sha512-J3yBRXCzDu4ULnQwxyToo/OjdMx6akgVC7K6few0a7F/0wLtmKKN7I73AH5T2836UuXRqN7Qg+IIUw/+YJksRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.0"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-next": {
      "version": "14.2.23",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-14.2.23.tgz",
      "integrity": "sha512-qtWJzOsDZxnLtXLNtnVjbutHmnEp6QTTSZBTlTCge/Wy0AsUaq8nwR91dBcZZvFg3eY3zKFPBhUkLMHu3Qpauw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "14.2.23",
        "@rushstack/eslint-patch": "^1.3.3",
        "@typescript-eslint/eslint-plugin": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "@typescript-eslint/parser": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.28.1",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.5.0 || 5.0.0-canary-7118f5dd7-20230705"
      },
      "peerDependencies": {
        "eslint": "^7.23.0 || ^8.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.9.tgz",
      "integrity": "sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.13.0",
        "resolve": "^1.22.4"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.7.0",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.7.0.tgz",
      "integrity": "sha512-Vrwyi8HHxY97K5ebydMtffsWAn1SCR9eol49eCd5fJS4O1WV7PaAjbcjmbfJJSMz/t4Mal212Uz/fQZrOB8mow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.3.7",
        "enhanced-resolve": "^5.15.0",
        "fast-glob": "^3.3.2",
        "get-tsconfig": "^4.7.5",
        "is-bun-module": "^1.0.2",
        "is-glob": "^4.0.3",
        "stable-hash": "^0.0.4"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/unts/projects/eslint-import-resolver-ts"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.0",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.0.tgz",
      "integrity": "sha512-wALZ0HFoytlyh/1+4wuZ9FJCD/leWHQzzrxJ8+rebyReSLk7LApMyd3WJaLVoN+D5+WIdJyDK1c6JnE65V4Zyg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.31.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.31.0.tgz",
      "integrity": "sha512-ixmkI62Rbc2/w8Vfxyh1jQRTdRTF52VxwRVHl/ykPAmqG+Nb7/kNn+byLP0LxPgI7zWA16Jt82SybJInmMia3A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.8",
        "array.prototype.findlastindex": "^1.2.5",
        "array.prototype.flat": "^1.3.2",
        "array.prototype.flatmap": "^1.3.2",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.0",
        "hasown": "^2.0.2",
        "is-core-module": "^2.15.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.0",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.8",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.4",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.4.tgz",
      "integrity": "sha512-BGP0jRmfYyvOyvMoRX/uoUeW+GqNj9y16bPQzqAHf3AYII/tDs+jMN0dBVkl88/OZwNGwrVFxE7riHsXVfy/LQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.8",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "5.0.0-canary-7118f5dd7-20230705",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.0.0-canary-7118f5dd7-20230705.tgz",
      "integrity": "sha512-AZYbMo/NW9chdL7vk6HQzQhT+PvTAEVqWk9ziruUoW2kAOcN5qNyelv70e0F1VNQAbvutOC9oc+xfWycI9FxDw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/resolve": {
      "version": "2.0.0-next.5",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.5.tgz",
      "integrity": "sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.13.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/eslint/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.18.0",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.18.0.tgz",
      "integrity": "sha512-QKHXPW0hD8g4UET03SdOdunzSouc9N4AuHdsX8XNcTsuz+yYFILVNIX4l9yHABMhiEI9Db0JTTIpu0wB+Y1QQw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.2.tgz",
      "integrity": "sha512-AiwGJM8YcNOaobumgtng+6NHuOqC3A7MixFeDafM3X9cIUM+xUXoS5Vfgf+OihAYe20fxqNM9yPBXJzRtZ/4eA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.4.tgz",
      "integrity": "sha512-kKaIINnFpzW6ffJNDjjyjrk21BkDx38c0xa/klsT8VzLCaMEefv4ZTacrcVR4DmgTeBra++jMDAfS/tS799YDw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/foreground-child": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
      "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/fraction.js": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "patreon",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fs-minipass": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
      "license": "ISC",
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/fs-minipass/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gauge": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-3.0.2.tgz",
      "integrity": "sha512-+5J6MS/5XksCuXq++uFRsnUd7Ovu1XenbeuIuNRJxYWjgQbPuFhT14lAvsWfqfAmnwluf1OwMjz39HjfLPci0Q==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "dependencies": {
        "aproba": "^1.0.3 || ^2.0.0",
        "color-support": "^1.1.2",
        "console-control-strings": "^1.0.0",
        "has-unicode": "^2.0.1",
        "object-assign": "^4.1.1",
        "signal-exit": "^3.0.0",
        "string-width": "^4.2.3",
        "strip-ansi": "^6.0.1",
        "wide-align": "^1.1.2"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/gauge/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/gauge/node_modules/signal-exit": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.7.tgz",
      "integrity": "sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==",
      "license": "ISC"
    },
    "node_modules/gauge/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.7.tgz",
      "integrity": "sha512-VW6Pxhsrk0KAOqs3WEd0klDiF/+V7gQOpAvY1jVU/LHmaD/kQO4523aiJuikX/QAKYiW6x8Jh+RJej1almdtCA==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.0",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.10.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.10.0.tgz",
      "integrity": "sha512-kGzZ3LWWQcGIAmg6iWvXn0ei6WDtV26wzHRMwDSzmAbcXrTEXxHy6IehI6/4eT6VRKyMP1eF1VqwrVUmE/LR7A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob": {
      "version": "10.3.10",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.3.10.tgz",
      "integrity": "sha512-fa46+tv1Ak0UPK1TOy/pZrIybNNt4HCv7SDzwyfiOZkvZLEbjsZkJBPtDHVshZjbecAoAGSC20MjLDG/qr679g==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^2.3.5",
        "minimatch": "^9.0.1",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0",
        "path-scurry": "^1.10.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/goober": {
      "version": "2.1.16",
      "resolved": "https://registry.npmjs.org/goober/-/goober-2.1.16.tgz",
      "integrity": "sha512-erjk19y1U33+XAMe1VTvIONHYoSqE4iS7BYUZfHaqeohLmnC0FdxEh7rQU+6MZ4OajItzjZFSRtVANrQwNq6/g==",
      "license": "MIT",
      "peerDependencies": {
        "csstype": "^3.0.10"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha512-8Rf9Y83NBReMnx0gFzA8JImQACstCYWUplepDa9xprwwtmgEZUF0h/i5xSA625zB/I37EtrswSST6OXxwaaIJQ==",
      "license": "ISC"
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.1.tgz",
      "integrity": "sha512-dFcAjpTQFgoLMzC2VwU+C/CbS7uRL0lWmxDITmqm7C+7F0Odmj6s9l6alZc6AELXhrnggM2CeWSXHGOdX2YtwA==",
      "license": "MIT",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.1.tgz",
      "integrity": "sha512-l9qO6eFlUETHtuihLcYOaLKByJ1f+N4kthcU9YjHy3N+B3hWv0y/2Nd0mu/7lTFnRQHTrSdXF50HQ3bl5fEnng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-1.3.0.tgz",
      "integrity": "sha512-DgXeu5UWI0IsMQundYb5UAOzm6G2eVnarJ0byP6Tm55iZNKceD59LNPA2L4VvsScTtHcw0yEkVwSf7PC+QoLSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.6.3"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.1",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz",
      "integrity": "sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.0.tgz",
      "integrity": "sha512-nPUB5km40q9e8UfN/Zc24eLlzdSf9OfKByBw9CIdw4H1giPMeA0OIJvbchsCu4npfI2QcMVBsGEBHKZ7wLTWmQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.0",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.0.tgz",
      "integrity": "sha512-SXM8Nwyys6nT5WP6pltOwKytLV7FqQ4UiibxVmW+EIosHcmCqkkjViTb5SNssDlkCiEYRP1/pdWUKVvZBmsR2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-what": {
      "version": "4.1.16",
      "resolved": "https://registry.npmjs.org/is-what/-/is-what-4.1.16.tgz",
      "integrity": "sha512-ZhMwEosbFJkA0YhFnNDgTM4ZxDRsS6HqTo7qsZM08fehyRYIYa0yHu5R6mgo1n/8MgaPBXiPimPD77baVFYg+A==",
      "license": "MIT",
      "engines": {
        "node": ">=12.13"
      },
      "funding": {
        "url": "https://github.com/sponsors/mesqueeb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jackspeak": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-2.3.6.tgz",
      "integrity": "sha512-N3yCS/NegsOBokc8GAdM8UcmfsKiSS8cipheD/nivzr700H+nsMOxJjQnvwOcRYVuFkdH0wGUvW2WbXGmrZGbQ==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/jose": {
      "version": "4.15.9",
      "resolved": "https://registry.npmjs.org/jose/-/jose-4.15.9.tgz",
      "integrity": "sha512-1vUQX+IdDMVPj4k8kOxgUqlcK518yluMuGZwqlr44FS1ppZB/5GWh4rZG89erpOBOJjU/OBsnCVFfapsRz6nEA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.469.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.469.0.tgz",
      "integrity": "sha512-28vvUnnKQ/dBwiCQtwJw7QauYnE7yd2Cyp4tTTJpvglX4EMpbflcdBgrgToX2j71B3YvugK/NH3BGUk+E/p/Fw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "license": "MIT",
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/make-dir/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/make-error": {
      "version": "1.3.6",
      "resolved": "https://registry.npmjs.org/make-error/-/make-error-1.3.6.tgz",
      "integrity": "sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.3.tgz",
      "integrity": "sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minizlib": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
      "license": "MIT",
      "dependencies": {
        "minipass": "^3.0.0",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/minizlib/node_modules/minipass": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.3.6.tgz",
      "integrity": "sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==",
      "license": "ISC",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.8",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.8.tgz",
      "integrity": "sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "15.1.6",
      "resolved": "https://registry.npmjs.org/next/-/next-15.1.6.tgz",
      "integrity": "sha512-Hch4wzbaX0vKQtalpXvUiw5sYivBy4cm5rzUKrBnUB/y436LGrvOUqYvlSeNVCWFO/770gDlltR9gqZH62ct4Q==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "15.1.6",
        "@swc/counter": "0.1.3",
        "@swc/helpers": "0.5.15",
        "busboy": "1.6.0",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": "^18.18.0 || ^19.8.0 || >= 20.0.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "15.1.6",
        "@next/swc-darwin-x64": "15.1.6",
        "@next/swc-linux-arm64-gnu": "15.1.6",
        "@next/swc-linux-arm64-musl": "15.1.6",
        "@next/swc-linux-x64-gnu": "15.1.6",
        "@next/swc-linux-x64-musl": "15.1.6",
        "@next/swc-win32-arm64-msvc": "15.1.6",
        "@next/swc-win32-x64-msvc": "15.1.6",
        "sharp": "^0.33.5"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.41.2",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next-auth": {
      "version": "4.24.11",
      "resolved": "https://registry.npmjs.org/next-auth/-/next-auth-4.24.11.tgz",
      "integrity": "sha512-pCFXzIDQX7xmHFs4KVH4luCjaCbuPRtZ9oBUjUhOk84mZ9WVPf94n87TxYI4rSRf9HmfHEF8Yep3JrYDVOo3Cw==",
      "license": "ISC",
      "dependencies": {
        "@babel/runtime": "^7.20.13",
        "@panva/hkdf": "^1.0.2",
        "cookie": "^0.7.0",
        "jose": "^4.15.5",
        "oauth": "^0.9.15",
        "openid-client": "^5.4.0",
        "preact": "^10.6.3",
        "preact-render-to-string": "^5.1.19",
        "uuid": "^8.3.2"
      },
      "peerDependencies": {
        "@auth/core": "0.34.2",
        "next": "^12.2.5 || ^13 || ^14 || ^15",
        "nodemailer": "^6.6.5",
        "react": "^17.0.2 || ^18 || ^19",
        "react-dom": "^17.0.2 || ^18 || ^19"
      },
      "peerDependenciesMeta": {
        "@auth/core": {
          "optional": true
        },
        "nodemailer": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-addon-api": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-5.1.0.tgz",
      "integrity": "sha512-eh0GgfEkpnoWDq+VY8OyvYhFEzBk6jIYbRKdIlyTiAXIVJ8PyBaKb0rp7oDtoddbdoHWhq8wwr+XZ81F1rpNdA==",
      "license": "MIT"
    },
    "node_modules/node-fetch": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.7.0.tgz",
      "integrity": "sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==",
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.19",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz",
      "integrity": "sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nopt": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
      "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
      "license": "ISC",
      "dependencies": {
        "abbrev": "1"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/npmlog": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-5.0.1.tgz",
      "integrity": "sha512-AqZtDUWOMKs1G/8lwylVjrdYgqA4d9nu8hc+0gzRxlDb1I10+FHBGMXs6aiQHFdCUUlqH99MUMuLfzWDNDtfxw==",
      "deprecated": "This package is no longer supported.",
      "license": "ISC",
      "dependencies": {
        "are-we-there-yet": "^2.0.0",
        "console-control-strings": "^1.1.0",
        "gauge": "^3.0.0",
        "set-blocking": "^2.0.0"
      }
    },
    "node_modules/oauth": {
      "version": "0.9.15",
      "resolved": "https://registry.npmjs.org/oauth/-/oauth-0.9.15.tgz",
      "integrity": "sha512-a5ERWK1kh38ExDEfoO6qUHJb32rd7aYmPHuyCu3Fta/cnICvYmgd2uhuKXvPD+PXB+gCEYYEaQdIRAjCOwAKNA==",
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-2.2.0.tgz",
      "integrity": "sha512-gScRMn0bS5fH+IuwyIFgnh9zBdo4DV+6GhygmWM9HyNJSgS0hScp1f5vjtm7oIIOiT9trXrShAkLFSc2IqKNgw==",
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.3",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.3.tgz",
      "integrity": "sha512-kDCGIbxkDSXE3euJZZXzc6to7fCrKHNI/hSRQnRuQ+BWjFNzZwiFF8fj/6o2t2G9/jTj8PSIYTfCLelLZEeRpA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.8.tgz",
      "integrity": "sha512-cmopxi8VwRIAw/fkijJohSfpef5PdN0pMQJN6VC/ZKvn0LIknWD8KtgY6KlQdEc4tIjcQ3HxSMmnvtzIscdaYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/oidc-token-hash": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/oidc-token-hash/-/oidc-token-hash-5.0.3.tgz",
      "integrity": "sha512-IF4PcGgzAr6XXSff26Sk/+P4KZFJVuHAJZj3wgO3vX2bMdNVp/QXTP3P7CEm9V1IdG8lDLY3HhiqpsE/nOwpPw==",
      "license": "MIT",
      "engines": {
        "node": "^10.13.0 || >=12.0.0"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/openid-client": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/openid-client/-/openid-client-5.7.1.tgz",
      "integrity": "sha512-jDBPgSVfTnkIh71Hg9pRvtJc6wTwqjRkN88+gCFtYWrlP4Yx2Dsrow8uPi3qLr/aeymPF3o2+dS+wOpglK04ew==",
      "license": "MIT",
      "dependencies": {
        "jose": "^4.15.9",
        "lru-cache": "^6.0.0",
        "object-hash": "^2.2.0",
        "oidc-token-hash": "^5.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/panva"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-scurry/node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.6.tgz",
      "integrity": "sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.0.0.tgz",
      "integrity": "sha512-d7Uw+eZoloe0EHDIYoe+bQ5WXnGMOpmiZFTuMWCwpjzzkL2nTjcKiAk4hh8TjnGye2TwWOk3UXucZ+3rbmBa8Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.1.tgz",
      "integrity": "sha512-6oz2beyjc5VMn/KV1pPw8fliQkhBXrVn1Z3TVyqZxU8kZpzEKhBdmCFqI6ZbmGtamQvQGuU1sgPTk8ZrXDD7jQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.8",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz",
      "integrity": "sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz",
      "integrity": "sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.0.0",
        "yaml": "^2.3.4"
      },
      "engines": {
        "node": ">= 14"
      },
      "peerDependencies": {
        "postcss": ">=8.0.9",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "postcss": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/preact": {
      "version": "10.25.4",
      "resolved": "https://registry.npmjs.org/preact/-/preact-10.25.4.tgz",
      "integrity": "sha512-jLdZDb+Q+odkHJ+MpW/9U5cODzqnB+fy2EiHSZES7ldV5LK7yjlVzTp7R8Xy6W6y75kfK8iWYtFVH7lvjwrCMA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/preact"
      }
    },
    "node_modules/preact-render-to-string": {
      "version": "5.2.6",
      "resolved": "https://registry.npmjs.org/preact-render-to-string/-/preact-render-to-string-5.2.6.tgz",
      "integrity": "sha512-JyhErpYOvBV1hEPwIxc/fHWXPfnEGdRKxc8gFdAZ7XV4tlzyzG847XAyEZqoDnynP88akM4eaHcSOzNcLWFguw==",
      "license": "MIT",
      "dependencies": {
        "pretty-format": "^3.8.0"
      },
      "peerDependencies": {
        "preact": ">=10"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.4.2.tgz",
      "integrity": "sha512-e9MewbtFo+Fevyuxn/4rrcDAaq0IYxPGLvObpQjiZBMAzB9IGmzlnG9RZy3FFas+eBMu2vA0CszMeduow5dIuQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-plugin-tailwindcss": {
      "version": "0.5.14",
      "resolved": "https://registry.npmjs.org/prettier-plugin-tailwindcss/-/prettier-plugin-tailwindcss-0.5.14.tgz",
      "integrity": "sha512-Puaz+wPUAhFp8Lo9HuciYKM2Y2XExESjeT+9NQoVFXZsPPnc9VYss2SpxdQ6vbatmt8/4+SN0oe0I1cPDABg9Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.21.3"
      },
      "peerDependencies": {
        "@ianvs/prettier-plugin-sort-imports": "*",
        "@prettier/plugin-pug": "*",
        "@shopify/prettier-plugin-liquid": "*",
        "@trivago/prettier-plugin-sort-imports": "*",
        "@zackad/prettier-plugin-twig-melody": "*",
        "prettier": "^3.0",
        "prettier-plugin-astro": "*",
        "prettier-plugin-css-order": "*",
        "prettier-plugin-import-sort": "*",
        "prettier-plugin-jsdoc": "*",
        "prettier-plugin-marko": "*",
        "prettier-plugin-organize-attributes": "*",
        "prettier-plugin-organize-imports": "*",
        "prettier-plugin-sort-imports": "*",
        "prettier-plugin-style-order": "*",
        "prettier-plugin-svelte": "*"
      },
      "peerDependenciesMeta": {
        "@ianvs/prettier-plugin-sort-imports": {
          "optional": true
        },
        "@prettier/plugin-pug": {
          "optional": true
        },
        "@shopify/prettier-plugin-liquid": {
          "optional": true
        },
        "@trivago/prettier-plugin-sort-imports": {
          "optional": true
        },
        "@zackad/prettier-plugin-twig-melody": {
          "optional": true
        },
        "prettier-plugin-astro": {
          "optional": true
        },
        "prettier-plugin-css-order": {
          "optional": true
        },
        "prettier-plugin-import-sort": {
          "optional": true
        },
        "prettier-plugin-jsdoc": {
          "optional": true
        },
        "prettier-plugin-marko": {
          "optional": true
        },
        "prettier-plugin-organize-attributes": {
          "optional": true
        },
        "prettier-plugin-organize-imports": {
          "optional": true
        },
        "prettier-plugin-sort-imports": {
          "optional": true
        },
        "prettier-plugin-style-order": {
          "optional": true
        },
        "prettier-plugin-svelte": {
          "optional": true
        }
      }
    },
    "node_modules/pretty-format": {
      "version": "3.8.0",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-3.8.0.tgz",
      "integrity": "sha512-WuxUnVtlWL1OfZFQFuqvnvs6MiAGk9UNsBostyBOB0Is9wb5uRESevA6rnl/rkksXaGX3GzZhPup5d6Vp1nFew==",
      "license": "MIT"
    },
    "node_modules/prisma": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/prisma/-/prisma-6.3.0.tgz",
      "integrity": "sha512-y+Zh3Qg+xGCWyyrNUUNaFW/OltaV/yXYuTa0WRgYkz5LGyifmAsgpv94I47+qGRocZrMGcbF2A/78/oO2zgifA==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/engines": "6.3.0"
      },
      "bin": {
        "prisma": "build/index.js"
      },
      "engines": {
        "node": ">=18.18"
      },
      "optionalDependencies": {
        "fsevents": "2.3.3"
      },
      "peerDependencies": {
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
      "integrity": "sha512-/3IjMdb2L9QbBdWiW5e3P2/npwMBaU9mHCSCUzNln0ZCYbcfTsGbTJrU/kGemdH2IWmB2ioZ+zkxtmq6g09fGQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-datepicker": {
      "version": "7.6.0",
      "resolved": "https://registry.npmjs.org/react-datepicker/-/react-datepicker-7.6.0.tgz",
      "integrity": "sha512-9cQH6Z/qa4LrGhzdc3XoHbhrxNcMi9MKjZmYgF/1MNNaJwvdSjv3Xd+jjvrEEbKEf71ZgCA3n7fQbdwd70qCRw==",
      "license": "MIT",
      "dependencies": {
        "@floating-ui/react": "^0.27.0",
        "clsx": "^2.1.1",
        "date-fns": "^3.6.0"
      },
      "peerDependencies": {
        "react": "^16.9.0 || ^17 || ^18 || ^19 || ^19.0.0-rc",
        "react-dom": "^16.9.0 || ^17 || ^18 || ^19 || ^19.0.0-rc"
      }
    },
    "node_modules/react-datepicker/node_modules/date-fns": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/date-fns/-/date-fns-3.6.0.tgz",
      "integrity": "sha512-fRHTG8g/Gif+kSh50gaGEdToemgfj74aRX3swtiouboip5JDLAyDE9F11nHMIcvOaXeOC6D7SpNhi7uFyB7Uww==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/kossnocorp"
      }
    },
    "node_modules/react-dom": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.2.0.tgz",
      "integrity": "sha512-6IMTriUmvsjHUjNtEDudZfuDQUoWXVxKHhlEGSk81n4YFS+r/Kl99wXiwlVXtPBtJenozv2P+hxDsw9eA7Xo6g==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.0"
      },
      "peerDependencies": {
        "react": "^18.2.0"
      }
    },
    "node_modules/react-hook-form": {
      "version": "7.54.2",
      "resolved": "https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.54.2.tgz",
      "integrity": "sha512-eHpAUgUjWbZocoQYUHposymRb4ZP6d0uwUnooL2uOybA9/3tPUvoAKqEWK1WaSiTxxOfTpffNZP7QwlnM3/gEg==",
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/react-hook-form"
      },
      "peerDependencies": {
        "react": "^16.8.0 || ^17 || ^18 || ^19"
      }
    },
    "node_modules/react-hot-toast": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/react-hot-toast/-/react-hot-toast-2.5.1.tgz",
      "integrity": "sha512-54Gq1ZD1JbmAb4psp9bvFHjS7lje+8ubboUmvKZkCsQBLH6AOpZ9JemfRvIdHcfb9AZXRaFLrb3qUobGYDJhFQ==",
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.1.3",
        "goober": "^2.1.16"
      },
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "react": ">=16",
        "react-dom": ">=16"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT"
    },
    "node_modules/read-cache": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz",
      "integrity": "sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "pify": "^2.3.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.14.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.14.1.tgz",
      "integrity": "sha512-dYnhHh0nJoMfnkZs6GmmhFknAGRrLznOu5nc9ML+EJxGvrx6H7teuevqVqCuPcPK//3eDrrjQhehXVx9cnkGdw==",
      "license": "MIT"
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.10",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.10.tgz",
      "integrity": "sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-core-module": "^2.16.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.3.tgz",
      "integrity": "sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/semver": {
      "version": "7.7.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.0.tgz",
      "integrity": "sha512-DrfFnPzblFmNrIZzg5RzHegbiRWg7KMR7btwi2yjHwx06zsUbO5g613sVwEV7FTwmzJu+Io0lJe2GJ3LxqpvBQ==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha512-KiKBS8AnWGEyLzofFfmvKwpdPzqiy16LvQfK3yv/fVH7Bj13/wl3JSR1J+rfgRE9q7xUJK4qvgS8raSOeLUehw==",
      "license": "ISC"
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/sharp": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.33.5.tgz",
      "integrity": "sha512-haPVm1EkS9pgvHrQ/F3Xy+hgcuMV0Wm9vfIBSiwZ05k+xgb0PkBQpGsAA/oWdDobNaZTH5ppvHtzCFbnSEwHVw==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "color": "^4.2.3",
        "detect-libc": "^2.0.3",
        "semver": "^7.6.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.33.5",
        "@img/sharp-darwin-x64": "0.33.5",
        "@img/sharp-libvips-darwin-arm64": "1.0.4",
        "@img/sharp-libvips-darwin-x64": "1.0.4",
        "@img/sharp-libvips-linux-arm": "1.0.5",
        "@img/sharp-libvips-linux-arm64": "1.0.4",
        "@img/sharp-libvips-linux-s390x": "1.0.4",
        "@img/sharp-libvips-linux-x64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4",
        "@img/sharp-linux-arm": "0.33.5",
        "@img/sharp-linux-arm64": "0.33.5",
        "@img/sharp-linux-s390x": "0.33.5",
        "@img/sharp-linux-x64": "0.33.5",
        "@img/sharp-linuxmusl-arm64": "0.33.5",
        "@img/sharp-linuxmusl-x64": "0.33.5",
        "@img/sharp-wasm32": "0.33.5",
        "@img/sharp-win32-ia32": "0.33.5",
        "@img/sharp-win32-x64": "0.33.5"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.4",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.4.tgz",
      "integrity": "sha512-LjdcbuBeLcdETCrPn9i8AYAZ1eCtu4ECAWtP7UleOiZ9LzVxRzzUZEoZ8zB24nhkQnDWyET0I+3sWokSDS3E7g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/streamsearch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz",
      "integrity": "sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stripe": {
      "version": "14.25.0",
      "resolved": "https://registry.npmjs.org/stripe/-/stripe-14.25.0.tgz",
      "integrity": "sha512-wQS3GNMofCXwH8TSje8E1SE8zr6ODiGtHQgPtO95p9Mb4FhKC9jvXR2NUTpZ9ZINlckJcFidCmaTFV4P6vsb9g==",
      "license": "MIT",
      "dependencies": {
        "@types/node": ">=8.1.0",
        "qs": "^6.11.0"
      },
      "engines": {
        "node": ">=12.*"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.0",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz",
      "integrity": "sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "glob": "^10.3.10",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/superjson": {
      "version": "2.2.2",
      "resolved": "https://registry.npmjs.org/superjson/-/superjson-2.2.2.tgz",
      "integrity": "sha512-5JRxVqC8I8NuOUjzBbvVJAKNM8qoVuH0O77h4WInc/qC2q5IreqKxYwgkga3PfA22OayK2ikceb/B26dztPl+Q==",
      "license": "MIT",
      "dependencies": {
        "copy-anything": "^3.0.2"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tabbable": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/tabbable/-/tabbable-6.2.0.tgz",
      "integrity": "sha512-Cat63mxsVJlzYvN51JmVXIgNoUokrIaT2zLclCXjRd8boZ0004U4KCs/sToJ75C6sdlByWxpYnb5Boif1VSFew==",
      "license": "MIT"
    },
    "node_modules/tailwind-merge": {
      "version": "2.6.0",
      "resolved": "https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-2.6.0.tgz",
      "integrity": "sha512-P+Vu1qXfzediirmHOC3xKGAYeZtPcV9g76X+xg2FD4tYgR71ewMA35Y3sCz3zhiN/dwefRpJX0yBcgwi1fXNQA==",
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/dcastil"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.17",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.17.tgz",
      "integrity": "sha512-w33E2aCvSDP0tW9RZuNXadXlkHXqFzSkQew/aIa2i/Sj8fThxwovwlXHSPXTbAHwEIhBFXAedUhP2tueAKP8Og==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.6",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tailwindcss/node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/tapable": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
      "integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tar": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.2.1.tgz",
      "integrity": "sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==",
      "license": "ISC",
      "dependencies": {
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "minipass": "^5.0.0",
        "minizlib": "^2.1.1",
        "mkdirp": "^1.0.3",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/tar/node_modules/minipass": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-5.0.0.tgz",
      "integrity": "sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==",
      "license": "ISC",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "license": "MIT"
    },
    "node_modules/ts-api-utils": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.4.3.tgz",
      "integrity": "sha512-i3eMG77UTMD0hZhgRS562pv83RC6ukSAC2GMNWc+9dieh/+jDM5u5YG+NHX6VNDRHQcHwmsTHctP9LhbC3WxVw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "peerDependencies": {
        "typescript": ">=4.2.0"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/ts-node": {
      "version": "10.9.2",
      "resolved": "https://registry.npmjs.org/ts-node/-/ts-node-10.9.2.tgz",
      "integrity": "sha512-f0FFpIdcHgn8zcPSbf1dRevwt047YMnaiJM3u2w2RewrB+fob/zePZcrOyQoLMMO7aBIddLcQIEK5dYjkLnGrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "^0.8.0",
        "@tsconfig/node10": "^1.0.7",
        "@tsconfig/node12": "^1.0.7",
        "@tsconfig/node14": "^1.0.0",
        "@tsconfig/node16": "^1.0.2",
        "acorn": "^8.4.1",
        "acorn-walk": "^8.1.1",
        "arg": "^4.1.0",
        "create-require": "^1.1.0",
        "diff": "^4.0.1",
        "make-error": "^1.1.1",
        "v8-compile-cache-lib": "^3.0.1",
        "yn": "3.1.1"
      },
      "bin": {
        "ts-node": "dist/bin.js",
        "ts-node-cwd": "dist/bin-cwd.js",
        "ts-node-esm": "dist/bin-esm.js",
        "ts-node-script": "dist/bin-script.js",
        "ts-node-transpile-only": "dist/bin-transpile.js",
        "ts-script": "dist/bin-script-deprecated.js"
      },
      "peerDependencies": {
        "@swc/core": ">=1.2.50",
        "@swc/wasm": ">=1.2.50",
        "@types/node": "*",
        "typescript": ">=2.7"
      },
      "peerDependenciesMeta": {
        "@swc/core": {
          "optional": true
        },
        "@swc/wasm": {
          "optional": true
        }
      }
    },
    "node_modules/ts-node/node_modules/arg": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/arg/-/arg-4.1.3.tgz",
      "integrity": "sha512-58S9QDqG0Xx27YwPSt9fJxivjYl432YCwfDMfZ+71RAqUrZef7LrKQZ3LHLOwCS4FLNBplP533Zx895SeOCHvA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.7.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.3.tgz",
      "integrity": "sha512-84MVSjMEHP+FQRPy3pX9sTVV/INIex71s9TL2Gm5FG/WG1SqXeKyZ0k7/blY/4FdOzI12CBy1vGc4og/eus0fw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "5.26.5",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
      "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.2.tgz",
      "integrity": "sha512-PPypAm5qvlD7XMZC3BujecnaOxwhrtoFR+Dqkk5Aa/6DssiH0ibKoketaj9w8LP7Bont1rYeoV5plxD7RTEPRg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/use-sync-external-store": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.4.0.tgz",
      "integrity": "sha512-9WXSPC5fMv61vaupRkCKCxsPxBocVnwakBEkMIHHpkTTg6icbJtg6jzgtLDm4bl3cSHAca52rYWih0k4K3PfHw==",
      "license": "MIT",
      "peerDependencies": {
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "license": "MIT",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/v8-compile-cache-lib": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/v8-compile-cache-lib/-/v8-compile-cache-lib-3.0.1.tgz",
      "integrity": "sha512-wa7YjyUGfNZngI/vtK0UHAN+lgDCxBPCylVXGp0zu59Fz5aiGtNXaq3DhIov063MorB+VfufLh3JlF2KdTK3xg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "license": "BSD-2-Clause"
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.18",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.18.tgz",
      "integrity": "sha512-qEcY+KJYlWyLH9vNbsr6/5j59AXk5ni5aakf8ldzBvGde6Iz4sxZGkJyWSAueTG7QhOvNRYb1lDdFmL5Td0QKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/wide-align": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.5.tgz",
      "integrity": "sha512-eDMORYaPNZ4sQIuuYPDHdQvf4gyCF9rEEV/yPxGfwPkRodwEgiMUUXTx/dex+Me0wxx53S+NgUHaP7y3MGlDmg==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^1.0.2 || 2 || 3 || 4"
      }
    },
    "node_modules/wide-align/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/wide-align/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
      "license": "ISC"
    },
    "node_modules/yaml": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.7.0.tgz",
      "integrity": "sha512-+hSoy/QHluxmC9kCIJyL/uyFmLmc+e5CFR5Wa+bpIhIj85LVb9ZH2nVnqrHoSvKogwODv0ClqZkmiSSaIH5LTA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/yn": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yn/-/yn-3.1.1.tgz",
      "integrity": "sha512-Ux4ygGWsu2c7isFWe8Yu1YluJmqVhxqK2cLXNQA5AcC3QfbGNpM7fu0Y8b/z16pXLnFxZYvWhd3fhBY9DLmC6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "3.24.1",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.24.1.tgz",
      "integrity": "sha512-muH7gBL9sI1nciMZV67X5fTKKBLtwpZ5VBp1vsOQzj1MhrBZ4wlVCm3gedKZWLp0Oyel8sIGfeiz54Su+OVT+A==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

```

`/Users/oscarvuong/doggo hotel/package.json`:

```json
{
  "name": "doggo-hotel",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "lint": "next lint",
    "postinstall": "prisma generate",
    "db:push": "prisma db push",
    "db:seed": "prisma db seed",
    "db:studio": "prisma studio",
    "test": "jest"
  },
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@next-auth/prisma-adapter": "^1.0.7",
    "@prisma/client": "^6.4.1",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slot": "^1.1.2",
    "@stripe/react-stripe-js": "^3.3.0",
    "@stripe/stripe-js": "^5.8.0",
    "@tanstack/react-query": "^4.36.1",
    "@trpc/client": "^10.45.2",
    "@trpc/next": "^10.45.2",
    "@trpc/react": "^9.27.4",
    "@trpc/react-query": "^10.45.2",
    "@trpc/server": "^10.45.2",
    "@types/react-datepicker": "^7.0.0",
    "bcrypt": "^5.1.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "express": "^4.21.2",
    "lucide-react": "^0.469.0",
    "next": "^15.2.1",
    "next-auth": "^4.24.11",
    "radix-ui": "^1.1.3",
    "react": "18.2.0",
    "react-datepicker": "^7.6.0",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.54.2",
    "react-hot-toast": "^2.5.2",
    "react-query": "^3.39.3",
    "recharts": "^2.15.1",
    "stripe": "^14.25.0",
    "superjson": "^2.2.2",
    "tailwind-merge": "^2.6.0",
    "trpc": "^0.11.3",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/bcryptjs": "^2.4.6",
    "@types/eslint": "^8.56.12",
    "@types/jest": "^29.5.14",
    "@types/node": "^22.13.9",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "autoprefixer": "^10.4.20",
    "bcryptjs": "^2.4.3",
    "eslint": "^8.57.1",
    "eslint-config-next": "^14.2.24",
    "jest": "^29.7.0",
    "postcss": "^8.5.3",
    "prettier": "^3.5.3",
    "prettier-plugin-tailwindcss": "^0.5.14",
    "prisma": "^6.4.1",
    "tailwindcss": "^3.4.17",
    "ts-jest": "^29.2.6",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.2"
  },
  "ct3aMetadata": {
    "initVersion": "7.24.2"
  },
  "pnpm": {
    "onlyBuiltDependencies": [
      "@prisma/client",
      "@prisma/engines",
      "esbuild",
      "prisma"
    ]
  }
}

```

`/Users/oscarvuong/doggo hotel/Plan.md`:

```md
You are tasked with designing and implementing a comprehensive dog boarding facility management system. As an expert software architect and senior full-stack engineer, provide a detailed technical architecture and implementation plan that addresses:

System Architecture:

Design a scalable microservices-based architecture
Define clear boundaries between different domains (boarding, payments, user management, etc.)
Outline data flow and communication patterns between services
Specify caching strategies and performance optimizations
Database Schema:

Create a normalized database design using Prisma schema
Include relations for: Users, Roles, Kennels, Reservations, Payments, Facilities, and Pets
Implement soft deletion and audit trails
Design for multi-tenancy support
Authentication & Authorization:

Implement role-based access control (RBAC) using NextAuth
Define permission matrices for each role (PetOwner, Staff, Manager, Admin)
Set up secure session management
Design API security middleware
API Layer:

Structure tRPC routers by domain
Implement full CRUD operations for all core resources:
Users: Create, Read, Update, Delete
Pets: Create, Read, Update, Delete (track vaccination records, dietary preferences, medical history)
Kennels: Create, Read, Update, Delete
Reservations: Create, Read, Update, Cancel (soft delete)
Payments: Create, Read, Update (refunds), Delete (soft delete)
Implement input validation and error handling
Design reusable middleware for common operations
Create type-safe API contracts
Frontend Architecture:

Organize components using atomic design principles
Implement responsive layouts with TailwindCSS
Design state management strategy
Create reusable UI components library
Role-Specific Dashboards:

Implement role-specific dashboards displaying all resources and actions the user has permissions to access:
PetOwner Dashboard:
View and manage their pets, bookings, payments, and kennel availability.
Staff Dashboard:
View and manage kennel availability, check-ins, check-outs, and reservations.
Manager Dashboard:
Manage staff, kennels, reservations, refunds, and facility settings.
Admin Dashboard:
Multi-tenant support to manage facilities, configurations, roles, and permissions.
Forms:

Implement all required forms with client-side validation and API integration, including:
User Management Forms:
Registration, login, profile management, and password reset forms.
Pet Management Forms:
Add/edit pet details (breed, age, dietary preferences, vaccination history, medical needs).
Reservation Forms:
Create/edit reservations, select kennel size, set check-in/check-out dates, specify add-on services (e.g., grooming).
Payment Forms:
Payment checkout with Stripe, refund requests, payment status updates.
Kennel Management Forms:
Add/edit kennel details, mark availability, assign reservations.
Facility Management Forms:
Update facility details, contact information, operating hours, multi-tenant branding.
Staff Management Forms:
Add/edit staff profiles, assign roles, manage scheduling.
Notification Configuration Forms:
Enable/disable email/SMS notifications for bookings, reminders, and cancellations.
Industry-Required Forms (Digital or Printable):
Liability Waiver: Required acknowledgment of risk and release from liability.
Veterinary Release: Authorization to seek emergency veterinary care if needed.
Vaccination & Medical Records: Verification of up-to-date shots (e.g., rabies, distemper), special medical conditions, or medications.
Owner Agreement: Terms of service, boarding policies, cancellation policies.
Payment Authorization: Permission for recurring or future charges (e.g., extended stays, additional services).
Payment Integration:

Design secure payment flow with Stripe
Implement webhook handlers
Handle payment failure scenarios
Design refund processes
Additional Requirements:

Initialize the project with the T3 stack (using create-t3-app)
Use a monorepo approach with pnpm as the package manager for all services and shared libraries
Implement CRUD workflows for managing resources in both backend and frontend
Design role-specific dashboards with UI components tailored to each role’s permissions and responsibilities
Include all industry-required forms for dog boarding services, ensuring secure data handling and compliance
Please provide a detailed implementation plan with code examples for critical components, focusing on maintainability, scalability, and security best practices.

Certainly! I'll provide a detailed implementation plan for the dog boarding facility management system using the T3 stack, focusing on maintainability, scalability, and security best practices. Let's break this down into sections:

Project Initialization and Structure

System Architecture

Database Schema

Authentication & Authorization

API Layer

Frontend Architecture

Role-Specific Dashboards

Forms

Payment Integration

Additional Requirements

Project Initialization and Structure

First, let's initialize the project using the T3 stack and set up the monorepo structure:

# Initialize the T3 app
pnpm dlx create-t3-app@latest dog-boarding-system

# Navigate to the project directory
cd dog-boarding-system

# Set up monorepo structure
mkdir packages
mv src packages/web

# Create additional packages
mkdir packages/server packages/shared

# Initialize package.json for new packages
cd packages/server && pnpm init
cd ../shared && pnpm init
cd ../..

# Update root package.json
{
  "name": "dog-boarding-system",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter web dev",
    "build": "pnpm --filter web build",
    "start": "pnpm --filter web start",
    "lint": "pnpm --filter web lint"
  },
  "workspaces": [
    "packages/*"
  ]
}
System Architecture
We'll implement a microservices-based architecture with the following services:

User Service
Pet Service
Kennel Service
Reservation Service
Payment Service
Facility Service
Each service will have its own database and API, communicating through a message broker (e.g., RabbitMQ) for event-driven architecture.

// packages/server/src/services/index.ts
import { UserService } from './user.service';
import { PetService } from './pet.service';
import { KennelService } from './kennel.service';
import { ReservationService } from './reservation.service';
import { PaymentService } from './payment.service';
import { FacilityService } from './facility.service';

export {
  UserService,
  PetService,
  KennelService,
  ReservationService,
  PaymentService,
  FacilityService,
};
For caching, we'll use Redis:

// packages/server/src/utils/cache.ts
import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

await redisClient.connect();

export const cache = {
  set: (key: string, value: string, expireInSeconds?: number) => {
    if (expireInSeconds) {
      return redisClient.setEx(key, expireInSeconds, value);
    }
    return redisClient.set(key, value);
  },
  get: (key: string) => redisClient.get(key),
  del: (key: string) => redisClient.del(key),
};
Database Schema
Using Prisma, let's define our schema:

// packages/server/prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  password      String
  role          Role      @default(PET_OWNER)
  pets          Pet[]
  reservations  Reservation[]
  payments      Payment[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Pet {
  id            String    @id @default(cuid())
  name          String
  breed         String
  age           Int
  ownerId       String
  owner         User      @relation(fields: [ownerId], references: [id])
  reservations  Reservation[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Kennel {
  id            String    @id @default(cuid())
  name          String
  size          String
  price         Float
  facilityId    String
  facility      Facility  @relation(fields: [facilityId], references: [id])
  reservations  Reservation[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Reservation {
  id            String    @id @default(cuid())
  startDate     DateTime
  endDate       DateTime
  status        ReservationStatus
  petId         String
  pet           Pet       @relation(fields: [petId], references: [id])
  kennelId      String
  kennel        Kennel    @relation(fields: [kennelId], references: [id])
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  payment       Payment?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Payment {
  id            String    @id @default(cuid())
  amount        Float
  status        PaymentStatus
  reservationId String    @unique
  reservation   Reservation @relation(fields: [reservationId], references: [id])
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

model Facility {
  id            String    @id @default(cuid())
  name          String
  address       String
  kennels       Kennel[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  deletedAt     DateTime?
}

enum Role {
  PET_OWNER
  STAFF
  MANAGER
  ADMIN
}

enum ReservationStatus {
  PENDING
  CONFIRMED
  CHECKED_IN
  CHECKED_OUT
  CANCELLED
}

enum PaymentStatus {
  PENDING
  PAID
  REFUNDED
  FAILED
}
Authentication & Authorization
We'll use NextAuth for authentication and implement RBAC:

// packages/web/src/pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user) {
          return null;
        }
        const isPasswordValid = await compare(credentials.password, user.password);
        if (!isPasswordValid) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
});
API Layer
We'll use tRPC to create type-safe APIs:

// packages/server/src/trpc/router/index.ts
import { createRouter } from '../createRouter';
import { userRouter } from './user';
import { petRouter } from './pet';
import { kennelRouter } from './kennel';
import { reservationRouter } from './reservation';
import { paymentRouter } from './payment';
import { facilityRouter } from './facility';

export const appRouter = createRouter()
  .merge('user.', userRouter)
  .merge('pet.', petRouter)
  .merge('kennel.', kennelRouter)
  .merge('reservation.', reservationRouter)
  .merge('payment.', paymentRouter)
  .merge('facility.', facilityRouter);

export type AppRouter = typeof appRouter;
Example of a tRPC router (User):

// packages/server/src/trpc/router/user.ts
import { z } from 'zod';
import { createRouter } from '../createRouter';
import { UserService } from '../../services';

export const userRouter = createRouter()
  .query('getAll', {
    async resolve({ ctx }) {
      return await UserService.getAll();
    },
  })
  .query('getById', {
    input: z.string(),
    async resolve({ input }) {
      return await UserService.getById(input);
    },
  })
  .mutation('create', {
    input: z.object({
      email: z.string().email(),
      name: z.string(),
      password: z.string(),
      role: z.enum(['PET_OWNER', 'STAFF', 'MANAGER', 'ADMIN']),
    }),
    async resolve({ input }) {
      return await UserService.create(input);
    },
  })
  .mutation('update', {
    input: z.object({
      id: z.string(),
      email: z.string().email().optional(),
      name: z.string().optional(),
      role: z.enum(['PET_OWNER', 'STAFF', 'MANAGER', 'ADMIN']).optional(),
    }),
    async resolve({ input }) {
      return await UserService.update(input);
    },
  })
  .mutation('delete', {
    input: z.string(),
    async resolve({ input }) {
      return await UserService.delete(input);
    },
  });
Frontend Architecture
We'll use atomic design principles and TailwindCSS for our frontend:

// packages/web/src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold';
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
Role-Specific Dashboards
Example of a PetOwner Dashboard:

// packages/web/src/pages/dashboard/pet-owner.tsx
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import { PetList, ReservationList, PaymentList } from '../../components/molecules';

export default function PetOwnerDashboard() {
  const { data: session } = useSession();
  const { data: pets } = trpc.useQuery(['pet.getByOwnerId', session?.user?.id]);
  const { data: reservations } = trpc.useQuery(['reservation.getByUserId', session?.user?.id]);
  const { data: payments } = trpc.useQuery(['payment.getByUserId', session?.user?.id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PetList pets={pets} />
        <ReservationList reservations={reservations} />
        <PaymentList payments={payments} />
      </div>
    </div>
  );
}
Forms
Example of a Pet Management Form:

// packages/web/src/components/organisms/PetForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';
import { Button, Input } from '../atoms';

const petSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  breed: z.string().min(1, 'Breed is required'),
  age: z.number().min(0, 'Age must be a positive number'),
});

type PetFormData = z.infer<typeof petSchema>;

export const PetForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PetFormData>({
    resolver: zodResolver(petSchema),
  });

  const addPet = trpc.useMutation(['pet.create']);

  const onSubmit = (data: PetFormData) => {
    addPet.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Pet Name"
        {...register('name')}
        error={errors.name?.message}
      />
      <Input
        label="Breed"
        {...register('breed')}
        error={errors.breed?.message}
      />
      <Input
        label="Age"
        type="number"
        {...register('age', { valueAsNumber: true })}
        error={errors.age?.message}
      />
      <Button type="submit">Add Pet</Button>
    </form>
  );
};
Payment Integration
Stripe integration example:

// packages/server/src/services/payment.service.ts
import Stripe from 'stripe';
import { prisma } from '../db/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export const PaymentService = {
  async createPaymentIntent(amount: number, currency: string = 'usd') {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    return paymentIntent;
  },

  async handleWebhook(event: Stripe.Event) {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await prisma.payment.update({
          where: { id: paymentIntent.metadata.paymentId },
          data: { status: 'PAID' },
        });
        break;
      case 'payment_intent.payment_failed':
        // Handle failed payment
        break;
    }
  },
};
Additional Requirements
For industry-required forms, we can create reusable components:

// packages/web/src/components/organisms/LiabilityWaiverForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Checkbox } from '../atoms';

const liabilityWaiverSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  date: z.string().min(1, 'Date is required'),
  acknowledgement: z.boolean().refine(val => val === true, {
    message: 'You must acknowledge the waiver',
  }),
});

type LiabilityWaiverFormData = z.infer<typeof liabilityWaiverSchema>;

export const LiabilityWaiverForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LiabilityWaiverFormData>({
    resolver: zodResolver(liabilityWaiverSchema),
  });

  const onSubmit = (data: LiabilityWaiverFormData) => {
    // Handle form submission (e.g., save to database, send to API)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full Name"
        {...register('fullName')}
        error={errors.fullName?.message}
      />
      <Input
        label="Date"
        type="date"
        {...register('date')}
        error={errors.date?.message}
      />
      <Checkbox
        label="I acknowledge that I have read and understood the liability waiver"
        {...register('acknowledgement')}
        error={errors.acknowledgement?.message}
      />
      <Button type="submit">Submit Waiver</Button>
    </form>
  );
};
This implementation plan covers the major components of the dog boarding facility management system. It provides a scalable, maintainable, and secure foundation using the T3 stack. The system is designed with microservices architecture, role-based access control, and industry-specific requirements in mind.

Remember to implement error handling, logging, and monitoring throughout the application. Also, ensure that all sensitive data is properly encrypted and that the application complies with relevant data protection regulations.

I

```

`/Users/oscarvuong/doggo hotel/tsconfig.json`:

```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": "./src",
    "paths": {
      "~/*": [
        "./*"
      ]
    },
    "target": "ES2017",
    "types": ["node", "jest"]
  },
  "include": [
    "src/index.ts",
    "src/server/**/*.ts",
    "src/routers/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "src/pages",
    "src/components"
  ]
}

```

`/Users/oscarvuong/doggo hotel/postcss.config.js`:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

`/Users/oscarvuong/doggo hotel/generate.log`:

```log
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (v6.4.1) to ./node_modules/.pnpm/@prisma+client@6.4.1_prisma@6.4.1_typescript@5.8.2__typescript@5.8.2/node_modules/@prisma/client in 82ms

Start by importing your Prisma Client (See: https://pris.ly/d/importing-client)

Tip: Easily identify and fix slow SQL queries in your app. Optimize helps you enhance your visibility: https://pris.ly/--optimize


```

`/Users/oscarvuong/doggo hotel/src/routers/payment.ts`:

```ts
import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const paymentRouter = router({
  createPayment: protectedProcedure.input(
    z.object({
      amount: z.number(),
      stripePaymentId: z.string().optional(),
      reservationId: z.number(),
    })
  ).mutation(async ({ ctx, input }) => {
    const payment = await ctx.prisma.payment.create({
      data: {
        amount: input.amount,
        status: 'PENDING',
        stripePaymentId: input.stripePaymentId,
        reservation: {
          connect: { id: input.reservationId },
        },
        user: {
          connect: { id: ctx.session.user.id },
        },
      },
    });
    return payment;
  }),
  listPayments: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.payment.findMany({
      where: { userId: ctx.session.user.id },
      include: { reservation: true },
    });
  }),
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/dashboard.ts`:

```ts
import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const dashboardRouter = router({
  getDashboardMetrics: protectedProcedure.query(async ({ ctx }) => {
    // Total revenue: sum of amounts for payments with status PAID
    const totalRevenueResult = await ctx.prisma.payment.aggregate({
      _sum: { amount: true },
      where: { status: 'PAID' }
    });
    const totalRevenue = totalRevenueResult._sum.amount || 0;

    // Occupancy rates per facility: for each facility, calculate occupancy rate = (# of active reservations / capacity) * 100
    const facilities = await ctx.prisma.facility.findMany({
      include: { reservations: true },
    });
    const occupancyRates = facilities.map(f => {
      const activeReservations = f.reservations.filter(r => r.status !== 'CANCELLED').length;
      const rate = f.capacity && f.capacity > 0 ? (activeReservations / f.capacity) * 100 : 0;
      return { facilityId: f.id, occupancyRate: rate };
    });

    // Booking trends: count reservations per day for the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentReservations = await ctx.prisma.reservation.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { createdAt: true },
    });

    const bookingTrendsMap: Record<string, number> = {};
    recentReservations.forEach(res => {
      const day = res.createdAt.toISOString().split('T')[0];
      bookingTrendsMap[day] = (bookingTrendsMap[day] || 0) + 1;
    });
    const bookingTrends = Object.entries(bookingTrendsMap).map(([date, count]) => ({ date, count }));

    return {
      totalRevenue,
      occupancyRates,
      bookingTrends,
    };
  })
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/facility.ts`:

```ts
import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const facilityRouter = router({
  createFacility: protectedProcedure.input(
    z.object({
      name: z.string(),
      address: z.string(),
      phone: z.string().optional(),
      operatingHours: z.string().optional(),
      capacity: z.number().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    const facility = await ctx.prisma.facility.create({
      data: {
        name: input.name,
        address: input.address,
        phone: input.phone,
        operatingHours: input.operatingHours,
        capacity: input.capacity,
      },
    });
    return facility;
  }),

  getFacilities: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.facility.findMany();
  }),

  updateFacility: protectedProcedure.input(
    z.object({
      id: z.number(),
      name: z.string().optional(),
      address: z.string().optional(),
      phone: z.string().optional(),
      operatingHours: z.string().optional(),
      capacity: z.number().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;
    const facility = await ctx.prisma.facility.update({
      where: { id },
      data,
    });
    return facility;
  }),

  deleteFacility: protectedProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    await ctx.prisma.facility.delete({
      where: { id: input },
    });
    return { message: "Facility deleted successfully" };
  }),
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/kennel.ts`:

```ts
import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const kennelRouter = router({
  createKennel: protectedProcedure.input(
    z.object({
      facilityId: z.number(),
      name: z.string(),
      capacity: z.number().optional(),
      category: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"])
    })
  ).mutation(async ({ ctx, input }) => {
    const kennel = await ctx.prisma.kennel.create({
      data: {
        facilityId: input.facilityId,
        name: input.name,
        capacity: input.capacity,
        category: input.category
      },
    });
    return kennel;
  }),

  getKennels: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.kennel.findMany();
  }),

  updateKennel: protectedProcedure.input(
    z.object({
      id: z.number(),
      name: z.string().optional(),
      capacity: z.number().optional(),
      category: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]).optional()
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;
    const kennel = await ctx.prisma.kennel.update({
      where: { id },
      data: data,
    });
    return kennel;
  }),

  deleteKennel: protectedProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    await ctx.prisma.kennel.delete({
      where: { id: input },
    });
    return { message: "Kennel deleted successfully" };
  }),
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/payment.test.ts`:

```ts
/**
 * @jest-environment node
 */
/// <reference types="jest" />
import { paymentRouter } from './payment';

describe('paymentRouter', () => {
  it('should have createPayment procedure', () => {
    expect(paymentRouter.createPayment).toBeDefined();
  });

  it('should have listPayments procedure', () => {
    expect(paymentRouter.listPayments).toBeDefined();
  });
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/pet.ts`:

```ts
import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';

export const petRouter = router({
  createPet: protectedProcedure.input(
    z.object({
      name: z.string(),
      species: z.string(),
      breed: z.string().optional(),
      age: z.number().optional(),
      vaccinationStatus: z.array(z.string()).optional(),
      medicalHistory: z.string().optional(),
      dietaryPreferences: z.string().optional(),
      behavioralNotes: z.string().optional(),
      emergencyContact: z.string().optional()
    })
  ).mutation(async ({ ctx, input }) => {
    const pet = await ctx.prisma.pet.create({
      data: {
        name: input.name,
        species: input.species,
        breed: input.breed,
        age: input.age,
        vaccinationStatus: input.vaccinationStatus,
        medicalHistory: input.medicalHistory,
        dietaryPreferences: input.dietaryPreferences,
        behavioralNotes: input.behavioralNotes,
        emergencyContact: input.emergencyContact,
        owner: { connect: { id: ctx.session.user.id } },
      } as any,
    });
    return pet;
  }),

  getAllPets: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.pet.findMany({
      where: { ownerId: ctx.session.user.id },
    });
  }),

  updatePet: protectedProcedure.input(
    z.object({
      id: z.number(),
      name: z.string().optional(),
      species: z.string().optional(),
      breed: z.string().optional(),
      age: z.number().optional(),
      vaccinationStatus: z.array(z.string()).optional(),
      medicalHistory: z.string().optional(),
      dietaryPreferences: z.string().optional(),
      behavioralNotes: z.string().optional(),
      emergencyContact: z.string().optional(),
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, ...data } = input;
    const pet = await ctx.prisma.pet.update({
      where: { id },
      data,
    });
    return pet;
  }),

  deletePet: protectedProcedure.input(z.number()).mutation(async ({ ctx, input }) => {
    await ctx.prisma.pet.delete({
      where: { id: input },
    });
    return { message: "Pet deleted successfully" };
  }),
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/kennel.test.ts`:

```ts
/**
 * @jest-environment node
 */
/// <reference types="jest" />

import { kennelRouter } from './kennel';

describe('kennelRouter', () => {
  it('should have createKennel procedure', () => {
    expect(kennelRouter.createKennel).toBeDefined();
  });

  it('should have getKennels procedure', () => {
    expect(kennelRouter.getKennels).toBeDefined();
  });

  it('should have updateKennel procedure', () => {
    expect(kennelRouter.updateKennel).toBeDefined();
  });

  it('should have deleteKennel procedure', () => {
    expect(kennelRouter.deleteKennel).toBeDefined();
  });
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/user.ts`:

```ts
import { router, publicProcedure } from '../server/trpc';

export const userRouter = router({
  hello: publicProcedure.query(() => {
    return { greeting: 'Hello from userRouter' };
  }),
}); 
```

`/Users/oscarvuong/doggo hotel/src/routers/reservation.ts`:

```ts
import { z } from 'zod';
import { router, protectedProcedure } from '../server/trpc';
import { Prisma } from '@prisma/client';

export const reservationRouter = router({
  createReservation: protectedProcedure.input(
    z.object({
      petId: z.number(),
      startDate: z.date(),
      endDate: z.date(),
      kennelId: z.number(),
      facilityId: z.number()
    })
  ).mutation(async ({ ctx, input }) => {
    const reservationData: Prisma.ReservationCreateInput = {
      pet: { connect: { id: input.petId } },
      user: { connect: { id: ctx.session.user.id } },
      startDate: input.startDate,
      endDate: input.endDate,
      kennel: { connect: { id: input.kennelId } },
      facility: { connect: { id: input.facilityId } }
    };
    const reservation = await ctx.prisma.reservation.create({ data: reservationData });
    return reservation;
  }),

  getReservations: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.reservation.findMany({
      where: { userId: ctx.session.user.id },
      include: { pet: true, payment: true },
    });
  }),

  updateReservationStatus: protectedProcedure.input(
    z.object({
      id: z.number(),
      status: z.enum(["PENDING", "CONFIRMED", "CHECKED_IN", "CHECKED_OUT", "CANCELLED"]),
    })
  ).mutation(async ({ ctx, input }) => {
    const reservation = await ctx.prisma.reservation.update({
      where: { id: input.id },
      data: { status: input.status },
    });
    return reservation;
  }),
}); 
```

`/Users/oscarvuong/doggo hotel/src/server/middleware/errorHandler.ts`:

```ts
import { TRPCError } from '@trpc/server';
import { logger } from '../logger';

interface ErrorWithCode extends Error {
  code?: string;
}

export const errorHandler = {
  // Handle database errors
  handleDatabaseError: (error: ErrorWithCode) => {
    logger.error('Database error:', error);
    
    // Common Prisma error codes
    switch (error.code) {
      case 'P2002':
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'A unique constraint would be violated.',
        });
      case 'P2025':
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Record not found.',
        });
      default:
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected database error occurred.',
        });
    }
  },

  // Handle authentication errors
  handleAuthError: (error: Error) => {
    logger.error('Authentication error:', error);
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'Authentication failed.',
    });
  },

  // Handle validation errors
  handleValidationError: (error: Error) => {
    logger.error('Validation error:', error);
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: error.message,
    });
  },

  // Handle Stripe errors
  handleStripeError: (error: ErrorWithCode) => {
    logger.error('Stripe error:', error);
    
    switch (error.code) {
      case 'card_declined':
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The card was declined.',
        });
      case 'expired_card':
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The card has expired.',
        });
      case 'incorrect_cvc':
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'The CVC number is incorrect.',
        });
      default:
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected payment processing error occurred.',
        });
    }
  },

  // Handle general application errors
  handleApplicationError: (error: Error) => {
    logger.error('Application error:', error);
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred.',
    });
  },
};

// Error handler middleware for tRPC procedures
export const errorMiddleware = async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    logger.error('Middleware caught error:', error);

    if (error instanceof TRPCError) {
      throw error;
    }

    // Handle different types of errors
    if ((error as ErrorWithCode).code?.startsWith('P')) {
      errorHandler.handleDatabaseError(error as ErrorWithCode);
    } else if (error.name === 'ValidationError') {
      errorHandler.handleValidationError(error);
    } else if (error.name === 'StripeError') {
      errorHandler.handleStripeError(error as ErrorWithCode);
    } else if (error.name === 'AuthenticationError') {
      errorHandler.handleAuthError(error);
    } else {
      errorHandler.handleApplicationError(error);
    }
  }
};

```

`/Users/oscarvuong/doggo hotel/src/server/middleware/rbac.ts`:

```ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerAuthSession } from '~/server/auth';

/**
 * Middleware to enforce role-based access control (RBAC)
 *
 * @param {string[]} allowedRoles - Array of roles allowed to access the route
 * @returns {Function} Middleware function
 */
export function withRole(allowedRoles: string[]) {
  return (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
      const session = await getServerAuthSession({ req, res });

      if (!session || !allowedRoles.includes(session.user.role)) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }

      await handler(req, res);
    };
  };
} 
```

`/Users/oscarvuong/doggo hotel/src/server/trpc.ts`:

```ts
import { initTRPC, TRPCError } from '@trpc/server';
import type { Context } from './trpc/context';
import { getServerAuthSession } from "./auth";
import { prisma } from "./db";
import { z } from "zod";
import { userRouter } from '../routers/user';
import { petRouter } from '../routers/pet';
import { paymentRouter } from '../routers/payment';
import { reservationRouter } from '../routers/reservation';
import { facilityRouter } from '../routers/facility';
import { kennelRouter } from '../routers/kennel';
import { dashboardRouter } from '../routers/dashboard';

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const middleware = t.middleware;

export { TRPCError };

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const session = ctx.session;
  if (!session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { ...ctx, session } });
});

export const adminProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (ctx.session.user.role !== "ADMIN") {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
  return next();
});

export const staffProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (!["ADMIN", "STAFF"].includes(ctx.session.user.role)) {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
  return next();
});

export const appRouter = router({
  user: userRouter,
  pet: petRouter,
  payment: paymentRouter,
  reservation: reservationRouter,
  facility: facilityRouter,
  kennel: kennelRouter,
  dashboard: dashboardRouter,
});
export type AppRouter = typeof appRouter;
export default appRouter;

```

`/Users/oscarvuong/doggo hotel/src/server/trpc/context.ts`:

```ts
/**
 * This file creates and exports the TRPC context including a dummy session for testing purposes.
 */

import { prisma } from "../db";

export interface Context {
  prisma: typeof prisma;
  session: {
    user: {
      id: string;
      role: string;
    };
  };
}

export const createContext = async ({ req, res }): Promise<Context> => {
  // Assign a dummy session for testing
  const session = { user: { id: "test-user", role: "ADMIN" } };
  return { prisma, session };
}; 
```

`/Users/oscarvuong/doggo hotel/src/server/trpc/router/index.ts`:

```ts
import { router } from '../../trpc';
import { userRouter } from '../../routers/user';
import { petRouter } from '../../routers/pet';
import { reservationRouter } from '../../routers/reservation';

export const appRouter = router({
  user: userRouter,
  pet: petRouter,
  reservation: reservationRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter; 
```

`/Users/oscarvuong/doggo hotel/src/server/logger.ts`:

```ts
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple(),
  }));
}

export default logger;

```

`/Users/oscarvuong/doggo hotel/src/server/api/routers/payment.ts`:

```ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";

const paymentSchema = z.object({
  reservationId: z.string(),
  amount: z.number().positive("Amount must be positive"),
  method: z.enum(["CREDIT_CARD", "DEBIT_CARD", "PAYPAL", "BANK_TRANSFER"]),
  status: z.enum(["PENDING", "COMPLETED", "REFUNDED"]),
});

export const paymentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(paymentSchema)
    .mutation(async ({ ctx, input }) => {
      const payment = await ctx.prisma.payment.create({
        data: input,
      });

      return payment;
    }),
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const payment = await ctx.prisma.payment.findUnique({
        where: { id: input },
      });

      if (!payment) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Payment not found",
        });
      }

      return payment;
    }),
  update: protectedProcedure
    .input(paymentSchema.partial().extend({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      const payment = await ctx.prisma.payment.update({
        where: { id },
        data,
      });

      return payment;
    }),
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const payment = await ctx.prisma.payment.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      });

      return payment;
    }),
});

```

`/Users/oscarvuong/doggo hotel/src/server/api/routers/dashboard.ts`:

```ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { ReservationStatus, KennelSize } from "@prisma/client";
import { TRPCError } from "@trpc/server";

export const dashboardRouter = createTRPCRouter({
  getMetrics: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

    // Get active reservations
    const activeReservations = await ctx.prisma.reservation.count({
      where: {
        status: {
          in: [ReservationStatus.CONFIRMED, ReservationStatus.CHECKED_IN],
        },
        startDate: {
          lte: now,
        },
        endDate: {
          gte: now,
        },
      },
    });

    // Get last month's active reservations for trend
    const lastMonthReservations = await ctx.prisma.reservation.count({
      where: {
        status: {
          in: [ReservationStatus.CONFIRMED, ReservationStatus.CHECKED_IN],
        },
        startDate: {
          gte: firstDayOfLastMonth,
          lt: firstDayOfMonth,
        },
      },
    });

    // Calculate reservation trend
    const reservationTrend = lastMonthReservations 
      ? ((activeReservations - lastMonthReservations) / lastMonthReservations) * 100
      : 0;

    // Get total kennels and occupied kennels for occupancy rate
    const totalKennels = await ctx.prisma.kennel.count();
    const occupiedKennels = await ctx.prisma.kennel.count({
      where: {
        status: "OCCUPIED",
      },
    });
    const occupancyRate = Math.round((occupiedKennels / totalKennels) * 100);

    // Get revenue metrics
    const currentMonthRevenue = await ctx.prisma.payment.aggregate({
      where: {
        status: "PAID",
        createdAt: {
          gte: firstDayOfMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });

    const lastMonthRevenue = await ctx.prisma.payment.aggregate({
      where: {
        status: "PAID",
        createdAt: {
          gte: firstDayOfLastMonth,
          lt: firstDayOfMonth,
        },
      },
      _sum: {
        amount: true,
      },
    });

    const revenueTrend = lastMonthRevenue._sum.amount
      ? ((currentMonthRevenue._sum.amount! - lastMonthRevenue._sum.amount) / lastMonthRevenue._sum.amount) * 100
      : 0;

    // Get available kennels
    const availableKennels = await ctx.prisma.kennel.count({
      where: {
        status: "AVAILABLE",
      },
    });

    return {
      activeReservations: {
        value: activeReservations,
        trend: Math.round(reservationTrend),
      },
      occupancyRate: {
        value: occupancyRate,
        trendLabel: `${occupiedKennels} out of ${totalKennels} kennels occupied`,
      },
      revenue: {
        value: Math.round(currentMonthRevenue._sum.amount || 0),
        trend: Math.round(revenueTrend),
      },
      availableKennels: {
        value: availableKennels,
        trendLabel: `${availableKennels} kennels ready for booking`,
      },
    };
  }),

  getRecentActivity: protectedProcedure.query(async ({ ctx }) => {
    const recentReservations = await ctx.prisma.reservation.findMany({
      where: {
        OR: [
          { status: ReservationStatus.CHECKED_IN },
          { status: ReservationStatus.CHECKED_OUT },
        ],
      },
      orderBy: {
        updatedAt: 'desc',
      },
      take: 5,
      include: {
        pet: {
          include: {
            owner: true,
          },
        },
        kennel: true,
      },
    });

    return recentReservations.map((reservation) => ({
      type: reservation.status === ReservationStatus.CHECKED_IN ? 'CHECK_IN' : 'CHECK_OUT',
      petName: reservation.pet.name,
      ownerName: reservation.pet.owner.email,
      kennelNumber: reservation.kennel.name,
      timestamp: reservation.updatedAt.toLocaleString(),
    }));
  }),

  getOccupancyData: protectedProcedure.query(async ({ ctx }) => {
    const now = new Date();
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      return date;
    }).reverse();

    const occupancyData = await Promise.all(
      dates.map(async (date) => {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);

        const occupiedKennels = await ctx.prisma.reservation.findMany({
          where: {
            startDate: {
              lte: nextDay,
            },
            endDate: {
              gte: date,
            },
            status: {
              in: [ReservationStatus.CHECKED_IN, ReservationStatus.CONFIRMED],
            },
          },
          include: {
            kennel: true,
          },
        });

        const bySize = occupiedKennels.reduce(
          (acc, reservation) => {
            const size = reservation.kennel.size;
            acc[size.toLowerCase() as Lowercase<KennelSize>] += 1;
            return acc;
          },
          { small: 0, medium: 0, large: 0 }
        );

        return {
          date: date.toLocaleDateString('en-US', { weekday: 'short' }),
          ...bySize,
        };
      })
    );

    return occupancyData;
  }),
});

```

`/Users/oscarvuong/doggo hotel/src/server/api/routers/kennel.ts`:

```ts
/**
 * Kennel Management Router
 * 
 * Handles all kennel-related operations including creating, reading, updating, and deleting kennels.
 * Implements role-based access control to ensure only authorized users can perform actions.
 * 
 * @module kennel
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  protectedProcedure,
  adminProcedure,
  staffProcedure,
} from "../trpc";

/**
 * Input validation schema for creating/updating a kennel
 */
const kennelSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  size: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]),
  dailyRate: z.number().positive("Daily rate must be positive"),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE", "RESERVED"]),
  location: z.string().optional(),
  notes: z.string().optional(),
  maxWeight: z.number().positive("Maximum weight must be positive"),
});

export const kennelRouter = createTRPCRouter({
  /**
   * Create a new kennel
   * 
   * @param {Object} input - Kennel data matching kennelSchema
   * @returns {Promise<Kennel>} Created kennel object
   * @throws {TRPCError} If validation fails or user is unauthorized
   */
  create: adminProcedure
    .input(kennelSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.kennel.create({
        data: input,
      });
    }),

  /**
   * Get all kennels with optional filters
   * 
   * @param {Object} input - Filter parameters
   * @returns {Promise<Kennel[]>} Array of kennel objects
   */
  getAll: protectedProcedure
    .input(
      z.object({
        status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE", "RESERVED"]).optional(),
        size: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]).optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      const where: any = {};

      if (input?.status) {
        where.status = input.status;
      }

      if (input?.size) {
        where.size = input.size;
      }

      // If dates are provided, check availability
      if (input?.startDate && input?.endDate) {
        where.OR = [
          {
            status: "AVAILABLE",
          },
          {
            reservations: {
              none: {
                OR: [
                  {
                    startDate: {
                      lte: input.endDate,
                    },
                    endDate: {
                      gte: input.startDate,
                    },
                  },
                ],
              },
            },
          },
        ];
      }

      return ctx.prisma.kennel.findMany({
        where,
        include: {
          reservations: {
            where: {
              endDate: {
                gte: new Date(),
              },
            },
            orderBy: {
              startDate: "asc",
            },
            include: {
              pet: true,
            },
          },
        },
        orderBy: {
          name: "asc",
        },
      });
    }),

  /**
   * Get a single kennel by ID
   * 
   * @param {string} input - Kennel ID
   * @returns {Promise<Kennel>} Kennel object
   * @throws {TRPCError} If kennel not found
   */
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input },
        include: {
          reservations: {
            where: {
              endDate: {
                gte: new Date(),
              },
            },
            orderBy: {
              startDate: "asc",
            },
            include: {
              pet: true,
            },
          },
        },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      return kennel;
    }),

  /**
   * Update a kennel's information
   * 
   * @param {Object} input - Updated kennel data and kennel ID
   * @returns {Promise<Kennel>} Updated kennel object
   * @throws {TRPCError} If kennel not found or user unauthorized
   */
  update: staffProcedure
    .input(
      z.object({
        id: z.string(),
        data: kennelSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input.id },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      return ctx.prisma.kennel.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  /**
   * Delete a kennel
   * 
   * @param {string} input - Kennel ID to delete
   * @returns {Promise<Kennel>} Deleted kennel object
   * @throws {TRPCError} If kennel not found or user unauthorized
   */
  delete: adminProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input },
        include: {
          reservations: {
            where: {
              endDate: {
                gte: new Date(),
              },
            },
          },
        },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      if (kennel.reservations.length > 0) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "Cannot delete kennel with active reservations",
        });
      }

      return ctx.prisma.kennel.delete({
        where: { id: input },
      });
    }),

  /**
   * Check kennel availability for a given date range
   * 
   * @param {Object} input - Date range and kennel ID
   * @returns {Promise<boolean>} Whether the kennel is available
   */
  checkAvailability: protectedProcedure
    .input(
      z.object({
        kennelId: z.string(),
        startDate: z.date(),
        endDate: z.date(),
      })
    )
    .query(async ({ ctx, input }) => {
      const kennel = await ctx.prisma.kennel.findUnique({
        where: { id: input.kennelId },
        include: {
          reservations: {
            where: {
              OR: [
                {
                  startDate: {
                    lte: input.endDate,
                  },
                  endDate: {
                    gte: input.startDate,
                  },
                },
              ],
            },
          },
        },
      });

      if (!kennel) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Kennel not found",
        });
      }

      return {
        isAvailable: kennel.status === "AVAILABLE" && kennel.reservations.length === 0,
        currentReservations: kennel.reservations,
      };
    }),
});

```

`/Users/oscarvuong/doggo hotel/src/server/api/routers/pet.ts`:

```ts
/**
 * Pet Management Router
 * 
 * Handles all pet-related operations including creating, reading, updating, and deleting pets.
 * Implements role-based access control to ensure only authorized users can perform actions.
 * 
 * @module pet
 */

import { z } from "zod";
import { TRPCError } from "@trpc/server";
import {
  createTRPCRouter,
  protectedProcedure,
  adminProcedure,
} from "../trpc";

/**
 * Input validation schema for creating/updating a pet
 */
const petSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  breed: z.string().min(2, "Breed must be at least 2 characters"),
  dateOfBirth: z.date(),
  weight: z.number().positive("Weight must be positive"),
  medicalConditions: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  medications: z.string().optional(),
  behavioralNotes: z.string().optional(),
  emergencyContactName: z.string().min(2, "Emergency contact name required"),
  emergencyContactPhone: z.string().min(10, "Valid phone number required"),
  vetName: z.string().optional(),
  vetPhone: z.string().optional(),
});

export const petRouter = createTRPCRouter({
  /**
   * Create a new pet
   * 
   * @param {Object} input - Pet data matching petSchema
   * @returns {Promise<Pet>} Created pet object
   * @throws {TRPCError} If validation fails or user is unauthorized
   */
  create: protectedProcedure
    .input(petSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.pet.create({
        data: {
          ...input,
          ownerId: ctx.session.user.id,
        },
      });
    }),

  /**
   * Get all pets owned by the current user
   * 
   * @returns {Promise<Pet[]>} Array of pet objects
   */
  getByOwnerId: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.pet.findMany({
      where: {
        ownerId: ctx.session.user.id,
      },
      orderBy: {
        name: "asc",
      },
    });
  }),

  /**
   * Get a single pet by ID
   * 
   * @param {Object} input - Pet ID
   * @returns {Promise<Pet|null>} Pet object or null if not found
   * @throws {TRPCError} If pet not found or user unauthorized
   */
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input },
        include: {
          owner: true,
          reservations: {
            orderBy: { startDate: "desc" },
            take: 5,
          },
        },
      });

      if (!pet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pet not found",
        });
      }

      // Only allow owner or admin to view pet details
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role !== "ADMIN"
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to view this pet",
        });
      }

      return pet;
    }),

  /**
   * Update a pet's information
   * 
   * @param {Object} input - Updated pet data and pet ID
   * @returns {Promise<Pet>} Updated pet object
   * @throws {TRPCError} If pet not found or user unauthorized
   */
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: petSchema.partial(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input.id },
      });

      if (!pet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pet not found",
        });
      }

      // Only allow owner or admin to update pet
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role !== "ADMIN"
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to update this pet",
        });
      }

      return ctx.prisma.pet.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  /**
   * Delete a pet
   * 
   * @param {string} input - Pet ID to delete
   * @returns {Promise<Pet>} Deleted pet object
   * @throws {TRPCError} If pet not found or user unauthorized
   */
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const pet = await ctx.prisma.pet.findUnique({
        where: { id: input },
      });

      if (!pet) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Pet not found",
        });
      }

      // Only allow owner or admin to delete pet
      if (
        pet.ownerId !== ctx.session.user.id &&
        ctx.session.user.role !== "ADMIN"
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to delete this pet",
        });
      }

      return ctx.prisma.pet.delete({
        where: { id: input },
      });
    }),

  /**
   * Admin only: Get all pets in the system
   * 
   * @returns {Promise<Pet[]>} Array of all pet objects
   */
  getAll: adminProcedure.query(async ({ ctx }) => {
    return ctx.prisma.pet.findMany({
      include: {
        owner: true,
        reservations: {
          orderBy: { startDate: "desc" },
          take: 1,
        },
      },
      orderBy: {
        name: "asc",
      },
    });
  }),
});

```

`/Users/oscarvuong/doggo hotel/src/server/api/routers/user.ts`:

```ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcrypt"; // Ensure bcrypt is imported for password hashing

// Input validation schemas
const createUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const updateUserSchema = z.object({
  id: z.string(),
  email: z.string().email("Invalid email address").optional(),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});

export const userRouter = createTRPCRouter({
  // Create a new user
  create: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ ctx, input }) => {
      const { email, name, password } = input;

      // Check for existing user
      const exists = await ctx.prisma.user.findUnique({
        where: { email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User with this email already exists",
        });
      }

      // Hash the password and create the user
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });

      return user;
    }),

  // Read user by ID
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { id: input },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });
      }

      return user;
    }),

  // Update user
  update: protectedProcedure
    .input(updateUserSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      const user = await ctx.prisma.user.update({
        where: { id },
        data,
      });

      return user;
    }),

  // Delete user (soft delete)
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.update({
        where: { id: input },
        data: { deletedAt: new Date() },
      });

      return user;
    }),
});

```

`/Users/oscarvuong/doggo hotel/src/server/api/routers/reservation.ts`:

```ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { Role, ReservationStatus, Prisma } from "@prisma/client";

const reservationSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  petId: z.string(),
  kennelId: z.string(),
  addOnServiceIds: z.array(z.string()).optional(),
});

export const reservationRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(
      z.object({
        status: z.enum([
          "PENDING",
          "CONFIRMED",
          "CHECKED_IN",
          "CHECKED_OUT",
          "CANCELLED",
        ]).optional(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      const where: Prisma.ReservationWhereInput = {
        deletedAt: null,
      };

      if (input?.status) {
        where.status = input.status;
      }

      if (input?.startDate) {
        where.startDate = {
          gte: input.startDate,
        };
      }

      if (input?.endDate) {
        where.endDate = {
          lte: input.endDate,
        };
      }

      // Filter based on user role
      if (ctx.session.user.role === Role.PET_OWNER) {
        where.userId = ctx.session.user.id;
      }

      return ctx.prisma.reservation.findMany({
        where,
        include: {
          pet: true,
          kennel: true,
          payment: true,
          addOnServices: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          startDate: "asc",
        },
      });
    }),

  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const reservation = await ctx.prisma.reservation.findUnique({
        where: { id: input },
        include: {
          pet: true,
          kennel: true,
          payment: true,
          addOnServices: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });

      if (!reservation) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Reservation not found",
        });
      }

      // Check authorization
      if (
        reservation.userId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.STAFF, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to view this reservation",
        });
      }

      return reservation;
    }),

  create: protectedProcedure
    .input(reservationSchema)
    .mutation(async ({ ctx, input }) => {
      // Validate dates
      if (input.startDate >= input.endDate) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "End date must be after start date",
        });
      }

      return ctx.prisma.reservation.create({
        data: input,
      });
    }),

  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum([
          "PENDING",
          "CONFIRMED",
          "CHECKED_IN",
          "CHECKED_OUT",
          "CANCELLED",
        ]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const reservation = await ctx.prisma.reservation.findUnique({
        where: { id: input.id },
        include: {
          payment: true,
        },
      });

      if (!reservation) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Reservation not found",
        });
      }

      // Check authorization
      if (
        reservation.userId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.STAFF, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to update this reservation",
        });
      }

      // Validate status transition
      if (input.status === "CONFIRMED" && reservation.payment?.status !== "PAID") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot confirm reservation without payment",
        });
      }

      return ctx.prisma.reservation.update({
        where: { id: input.id },
        data: {
          status: input.status,
        },
        include: {
          pet: true,
          kennel: true,
          payment: true,
          addOnServices: true,
        },
      });
    }),

  cancel: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const reservation = await ctx.prisma.reservation.findUnique({
        where: { id: input },
      });

      if (!reservation) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Reservation not found",
        });
      }

      // Check authorization
      if (
        reservation.userId !== ctx.session.user.id &&
        ![Role.ADMIN, Role.MANAGER].includes(ctx.session.user.role)
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Not authorized to cancel this reservation",
        });
      }

      // Cannot cancel after check-in
      if (reservation.status === "CHECKED_IN") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Cannot cancel reservation after check-in",
        });
      }

      return ctx.prisma.reservation.update({
        where: { id: input },
        data: {
          status: "CANCELLED",
          deletedAt: new Date(),
        },
      });
    }),
});

```

`/Users/oscarvuong/doggo hotel/src/server/api/routers/auth.ts`:

```ts
/**
 * Authentication Router
 *
 * This router handles all authentication-related operations including user registration
 * and password management. It uses bcrypt for password hashing and implements
 * proper security measures for user data protection.
 *
 * @module auth
 */

import { z } from "zod";
import { hash as bcryptHash } from "bcrypt";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../db";
import { getSession } from "next-auth/react";

/**
 * Input validation schema for user registration
 */
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Add your custom credential provider logic here
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
    async signIn(user, account, profile) {
      return true;
    },
  },
});

// RBAC Middleware
export const rbacMiddleware = async (req, res, next) => {
  const session = await getSession({ req });
  if (!session || !session.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const hasPermission = await prisma.permission.findFirst({
    where: {
      role: session.user.role,
      resource: "auth",
      action: req.method.toLowerCase(),
    },
  });
  if (!hasPermission) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

export const authRouter = createTRPCRouter({
  /**
   * Register a new user
   *
   * This mutation handles new user registration. It:
   * 1. Validates the input data
   * 2. Checks for existing users with the same email
   * 3. Hashes the password
   * 4. Creates a new user record
   * 5. Returns necessary data for immediate sign-in
   *
   * @param {Object} input - Registration data
   * @param {string} input.name - User's full name
   * @param {string} input.email - User's email address
   * @param {string} input.password - User's password (plain text)
   * @returns {Promise<Object>} Registration result with user data
   * @throws {TRPCError} If email already exists or registration fails
   */
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;

      // Check for existing user
      const exists = await ctx.prisma.user.findUnique({
        where: { email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User with this email already exists",
        });
      }

      // Hash the password and create the user
      const hashedPassword = await bcryptHash(password, 10);
      const user = await ctx.prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });

      return user;
    }),
});

```

`/Users/oscarvuong/doggo hotel/src/server/api/trpc.ts`:

```ts
import { type Session } from "next-auth";
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */
import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import superjson from "superjson";
import { ZodError } from "zod";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 */
interface CreateContextOptions {
  session: Session | null;
}

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  return createInnerTRPCContext({
    session,
  });
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * 3. ROUTER & PROCEDURES
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure;

/** Reusable middleware that enforces users are logged in before running the procedure. */
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

```

`/Users/oscarvuong/doggo hotel/src/server/api/root.ts`:

```ts
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/user";
import { petRouter } from "./routers/pet";
import { kennelRouter } from "./routers/kennel";
import { reservationRouter } from "./routers/reservation";
import { paymentRouter } from "./routers/payment";
import { facilityRouter } from "./routers/facility";
import { authRouter } from "./routers/auth";
import { dashboardRouter } from "./routers/dashboard";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  user: userRouter,
  pet: petRouter,
  kennel: kennelRouter,
  reservation: reservationRouter,
  payment: paymentRouter,
  facility: facilityRouter,
  dashboard: dashboardRouter,
});

export type AppRouter = typeof appRouter;

```

`/Users/oscarvuong/doggo hotel/src/server/db.ts`:

```ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };

```

`/Users/oscarvuong/doggo hotel/src/server/auth.ts`:

```ts
/**
 * NextAuth Configuration
 *
 * This file configures authentication for the application using NextAuth.js.
 * It sets up:
 * - Credential-based authentication
 * - Session handling with JWT
 * - Role-based access control
 * - Prisma adapter for database integration
 *
 * @module auth
 */

import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { prisma } from "~/server/db";
import { type Role } from "@prisma/client";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: Role;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
  }
}

/**
 * Authentication options configuration for NextAuth.js
 *
 * @type {NextAuthOptions}
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    /**
     * Callback to add custom fields to the JWT token
     *
     * @param {Object} param0 - Callback parameters
     * @param {any} param0.token - JWT token
     * @param {any} param0.user - User object
     * @returns {Promise<any>} Modified token
     */
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    /**
     * Callback to customize session object
     *
     * @param {Object} param0 - Callback parameters
     * @param {any} param0.session - Session object
     * @param {any} param0.token - JWT token
     * @returns {Promise<any>} Modified session
     */
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,
        role: token.role,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      /**
       * Authorize user credentials
       *
       * @param {Object} credentials - User credentials
       * @param {string} credentials.email - User email
       * @param {string} credentials.password - User password
       * @returns {Promise<any>} Authorized user object
       * @throws {Error} If credentials are invalid
       */
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

/**
 * Helper function to get server-side session data
 *
 * @param {GetServerSidePropsContext} ctx - Server-side context
 * @returns {Promise<Session|null>} Session data or null
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

```

`/Users/oscarvuong/doggo hotel/src/utils/trpc.ts`:

```ts
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";

import { type AppRouter } from "~/server/api/root";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

/** A set of type-safe react-query hooks for your tRPC API. */
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;

```

`/Users/oscarvuong/doggo hotel/src/utils/api.ts`:

```ts
/**
 * This is the client-side entrypoint for your tRPC API.
 * It's used to create the `api` object which contains the Next.js App-wrapper
 * as well as your typesafe react-query hooks.
 */
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import superjson from "superjson";

import { type AppRouter } from "~/server/api/root";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

/** A set of typesafe react-query hooks for your tRPC API. */
export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;

```

`/Users/oscarvuong/doggo hotel/src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
 
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
 
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
 
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
 
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
 
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
 
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
 
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
 
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
 
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
 
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
 
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
 
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```

`/Users/oscarvuong/doggo hotel/src/components/ui/card.tsx`:

```tsx
import * as React from "react"

import { cn } from "~/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```

`/Users/oscarvuong/doggo hotel/src/components/ui/button.tsx`:

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

`/Users/oscarvuong/doggo hotel/src/components/ui/Select.tsx`:

```tsx
import React from 'react';

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return <select {...props} className="border rounded-md p-2 w-full">{props.children}</select>;
};

export default Select;

```

`/Users/oscarvuong/doggo hotel/src/components/ui/Textarea.tsx`:

```tsx
import React from 'react';

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} className="border rounded-md p-2 w-full" />;
};

export default Textarea;

```

`/Users/oscarvuong/doggo hotel/src/components/ui/Input.tsx`:

```tsx
import React from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} className="border rounded-md p-2 w-full" />;
};

export default Input;

```

`/Users/oscarvuong/doggo hotel/src/components/ui/Form.tsx`:

```tsx
import React from 'react';

const Form: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <form className="space-y-4">{children}</form>;
};

export default Form;

```

`/Users/oscarvuong/doggo hotel/src/components/forms/PetForm.tsx`:

```tsx
/**
 * Pet Form Component
 * 
 * A reusable form component for creating and editing pets.
 * Handles validation, submission, and error display.
 * 
 * @module components/forms/PetForm
 */

import { type Pet } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "~/components/ui/button";

/**
 * Schema for pet form validation
 */
const petFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  breed: z.string().min(2, "Breed must be at least 2 characters"),
  dateOfBirth: z.string().transform((str) => new Date(str)),
  weight: z.string().transform((str) => parseFloat(str)),
  medicalConditions: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  medications: z.string().optional(),
  behavioralNotes: z.string().optional(),
  emergencyContactName: z.string().min(2, "Emergency contact name required"),
  emergencyContactPhone: z.string().min(10, "Valid phone number required"),
  vetName: z.string().optional(),
  vetPhone: z.string().optional(),
});

type PetFormData = z.infer<typeof petFormSchema>;

interface PetFormProps {
  /**
   * Initial pet data for editing, undefined for new pets
   */
  initialData?: Pet;
  /**
   * Callback function called with form data on successful submission
   */
  onSubmit: (data: PetFormData) => void;
  /**
   * Whether the form is currently submitting
   */
  isSubmitting?: boolean;
}

export const PetForm: React.FC<PetFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PetFormData>({
    resolver: zodResolver(petFormSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          dateOfBirth: initialData.dateOfBirth.toISOString().split("T")[0],
          weight: initialData.weight.toString(),
        }
      : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Basic Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Pet Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700"
            >
              Breed
            </label>
            <input
              type="text"
              {...register("breed")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.breed && (
              <p className="mt-1 text-sm text-red-600">{errors.breed.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              {...register("dateOfBirth")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.dateOfBirth && (
              <p className="mt-1 text-sm text-red-600">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-gray-700"
            >
              Weight (lbs)
            </label>
            <input
              type="number"
              step="0.1"
              {...register("weight")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.weight && (
              <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Medical Information
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="medicalConditions"
              className="block text-sm font-medium text-gray-700"
            >
              Medical Conditions
            </label>
            <textarea
              {...register("medicalConditions")}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="medications"
              className="block text-sm font-medium text-gray-700"
            >
              Current Medications
            </label>
            <textarea
              {...register("medications")}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="dietaryRestrictions"
              className="block text-sm font-medium text-gray-700"
            >
              Dietary Restrictions
            </label>
            <textarea
              {...register("dietaryRestrictions")}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Emergency Contacts
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="emergencyContactName"
              className="block text-sm font-medium text-gray-700"
            >
              Emergency Contact Name
            </label>
            <input
              type="text"
              {...register("emergencyContactName")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.emergencyContactName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.emergencyContactName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="emergencyContactPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Emergency Contact Phone
            </label>
            <input
              type="tel"
              {...register("emergencyContactPhone")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.emergencyContactPhone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.emergencyContactPhone.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="vetName"
              className="block text-sm font-medium text-gray-700"
            >
              Veterinarian Name
            </label>
            <input
              type="text"
              {...register("vetName")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="vetPhone"
              className="block text-sm font-medium text-gray-700"
            >
              Veterinarian Phone
            </label>
            <input
              type="tel"
              {...register("vetPhone")}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Behavioral Notes */}
      <div>
        <label
          htmlFor="behavioralNotes"
          className="block text-sm font-medium text-gray-700"
        >
          Behavioral Notes
        </label>
        <textarea
          {...register("behavioralNotes")}
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Any special behaviors, preferences, or concerns..."
        />
      </div>

      <div className="flex justify-end space-x-3">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center"
        >
          {isSubmitting
            ? "Saving..."
            : initialData
            ? "Update Pet"
            : "Create Pet"}
        </Button>
      </div>
    </form>
  );
};

```

`/Users/oscarvuong/doggo hotel/src/components/forms/PaymentAuthorizationForm.tsx`:

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const paymentAuthSchema = z.object({
  cardholderName: z.string().min(1, 'Cardholder name is required'),
  billingAddress: z.object({
    street: z.string().min(1, 'Street address is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zipCode: z.string().min(5, 'Valid ZIP code is required'),
  }),
  paymentTerms: z.object({
    recurringCharges: z.boolean(),
    additionalServices: z.boolean(),
    cancellationFees: z.boolean(),
    refundPolicy: z.boolean(),
  }).refine((data) => Object.values(data).every(Boolean), {
    message: 'All payment terms must be acknowledged',
  }),
  maxAuthorizedAmount: z.number().min(0, 'Maximum authorized amount must be a positive number'),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type PaymentAuthFormData = z.infer<typeof paymentAuthSchema>;

const PaymentAuthorizationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentAuthFormData>({
    resolver: zodResolver(paymentAuthSchema),
  });

  const submitAuth = trpc.paymentAuth.create.useMutation({
    onSuccess: () => {
      // Handle success
    },
  });

  const onSubmit = (data: PaymentAuthFormData) => {
    submitAuth.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Payment Authorization</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
          <input
            type="text"
            {...register('cardholderName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.cardholderName && (
            <p className="mt-1 text-sm text-red-600">{errors.cardholderName.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Billing Address</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                {...register('billingAddress.street')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.billingAddress?.street && (
                <p className="mt-1 text-sm text-red-600">{errors.billingAddress.street.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  {...register('billingAddress.city')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.billingAddress?.city && (
                  <p className="mt-1 text-sm text-red-600">{errors.billingAddress.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  {...register('billingAddress.state')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.billingAddress?.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.billingAddress.state.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  {...register('billingAddress.zipCode')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.billingAddress?.zipCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.billingAddress.zipCode.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Maximum Authorized Amount ($)
          </label>
          <input
            type="number"
            {...register('maxAuthorizedAmount', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.maxAuthorizedAmount && (
            <p className="mt-1 text-sm text-red-600">{errors.maxAuthorizedAmount.message}</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-medium">Payment Terms</h3>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.recurringCharges')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I authorize recurring charges for extended stays or additional services.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.additionalServices')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand additional services will be charged separately.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.cancellationFees')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I acknowledge and accept the cancellation fee policy.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('paymentTerms.refundPolicy')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand and agree to the refund policy.
              </label>
            </div>
          </div>

          {errors.paymentTerms && (
            <p className="mt-1 text-sm text-red-600">{errors.paymentTerms.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Digital Signature</label>
          <input
            type="text"
            {...register('signature')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.signature && (
            <p className="mt-1 text-sm text-red-600">{errors.signature.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            {...register('date')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Payment Authorization
        </button>
      </div>
    </form>
  );
};

export default PaymentAuthorizationForm;

```

`/Users/oscarvuong/doggo hotel/src/components/forms/OwnerAgreementForm.tsx`:

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const ownerAgreementSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  petName: z.string().min(1, 'Pet name is required'),
  policies: z.object({
    boardingPolicies: z.boolean(),
    cancellationPolicy: z.boolean(),
    healthRequirements: z.boolean(),
    behaviorPolicy: z.boolean(),
    personalItems: z.boolean(),
    photoRelease: z.boolean(),
  }).refine((data) => Object.values(data).every(Boolean), {
    message: 'All policies must be acknowledged',
  }),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type OwnerAgreementFormData = z.infer<typeof ownerAgreementSchema>;

const OwnerAgreementForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<OwnerAgreementFormData>({
    resolver: zodResolver(ownerAgreementSchema),
  });

  const submitAgreement = trpc.ownerAgreement.create.useMutation({
    onSuccess: () => {
      // Handle success
    },
  });

  const onSubmit = (data: OwnerAgreementFormData) => {
    submitAgreement.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Owner Agreement</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Owner Name</label>
            <input
              type="text"
              {...register('ownerName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.ownerName && (
              <p className="mt-1 text-sm text-red-600">{errors.ownerName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pet Name</label>
            <input
              type="text"
              {...register('petName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.petName && (
              <p className="mt-1 text-sm text-red-600">{errors.petName.message}</p>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <h3 className="text-lg font-medium">Facility Policies</h3>
          
          <div className="space-y-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.boardingPolicies')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I have read and agree to the boarding policies, including feeding schedules, exercise routines, and facility rules.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.cancellationPolicy')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand and agree to the cancellation policy and associated fees.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.healthRequirements')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I confirm that my pet meets all health requirements and vaccinations are up to date.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.behaviorPolicy')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand the behavior policy and accept responsibility for any incidents.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.personalItems')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I understand the policy regarding personal items and that the facility is not responsible for lost items.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                {...register('policies.photoRelease')}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-700">
                I grant permission for the facility to take and use photos of my pet for social media and marketing purposes.
              </label>
            </div>
          </div>

          {errors.policies && (
            <p className="mt-1 text-sm text-red-600">{errors.policies.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Digital Signature</label>
          <input
            type="text"
            {...register('signature')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.signature && (
            <p className="mt-1 text-sm text-red-600">{errors.signature.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            {...register('date')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Agreement
        </button>
      </div>
    </form>
  );
};

export default OwnerAgreementForm;

```

`/Users/oscarvuong/doggo hotel/src/components/forms/ReservationForm.tsx`:

```tsx
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/utils/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const reservationSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  petId: z.string().min(1, "Please select a pet"),
  kennelId: z.string().min(1, "Please select a kennel"),
  addOnServiceIds: z.array(z.string()).optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  onSuccess?: () => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({ onSuccess }) => {
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const utils = api.useContext();
  
  // Fetch user's pets
  const { data: pets } = api.pet.getByOwnerId.useQuery();
  
  // Fetch available kennels
  const { data: kennels } = api.kennel.getAvailable.useQuery(
    {
      startDate: watch("startDate"),
      endDate: watch("endDate"),
    },
    {
      enabled: Boolean(watch("startDate") && watch("endDate")),
    }
  );

  // Fetch add-on services
  const { data: addOnServices } = api.addOnService.getAll.useQuery();

  const createReservation = api.reservation.create.useMutation({
    onSuccess: () => {
      reset();
      utils.reservation.getAll.invalidate();
      onSuccess?.();
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    try {
      await createReservation.mutateAsync(data);
    } catch (err) {
      // Error is handled by the mutation callbacks
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check-in Date
          </label>
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                minDate={new Date()}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            )}
          />
          {errors.startDate && (
            <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Check-out Date
          </label>
          <Controller
            control={control}
            name="endDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                minDate={watch("startDate") || new Date()}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            )}
          />
          {errors.endDate && (
            <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Pet
        </label>
        <select
          {...register("petId")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a pet</option>
          {pets?.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.name} ({pet.breed})
            </option>
          ))}
        </select>
        {errors.petId && (
          <p className="mt-1 text-sm text-red-600">{errors.petId.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Select Kennel
        </label>
        <select
          {...register("kennelId")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a kennel</option>
          {kennels?.map((kennel) => (
            <option key={kennel.id} value={kennel.id}>
              {kennel.name} - {kennel.size} (${kennel.price}/night)
            </option>
          ))}
        </select>
        {errors.kennelId && (
          <p className="mt-1 text-sm text-red-600">{errors.kennelId.message}</p>
        )}
      </div>

      {addOnServices && addOnServices.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Services
          </label>
          <div className="mt-2 space-y-2">
            {addOnServices.map((service) => (
              <div key={service.id} className="flex items-center">
                <input
                  type="checkbox"
                  {...register("addOnServiceIds")}
                  value={service.id}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  {service.name} - ${service.price}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isSubmitting ? "Creating..." : "Create Reservation"}
        </button>
      </div>
    </form>
  );
};

```

`/Users/oscarvuong/doggo hotel/src/components/forms/VeterinaryReleaseForm.tsx`:

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const veterinaryReleaseSchema = z.object({
  petName: z.string().min(1, 'Pet name is required'),
  ownerName: z.string().min(1, 'Owner name is required'),
  veterinarianName: z.string().min(1, 'Veterinarian name is required'),
  veterinarianPhone: z.string().min(1, 'Veterinarian phone is required'),
  veterinarianAddress: z.string().min(1, 'Veterinarian address is required'),
  maxTreatmentCost: z.number().min(0, 'Maximum treatment cost must be a positive number'),
  emergencyContact: z.string().min(1, 'Emergency contact is required'),
  emergencyPhone: z.string().min(1, 'Emergency contact phone is required'),
  authorization: z.boolean().refine((val) => val === true, {
    message: 'You must authorize emergency veterinary care',
  }),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type VeterinaryReleaseFormData = z.infer<typeof veterinaryReleaseSchema>;

const VeterinaryReleaseForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<VeterinaryReleaseFormData>({
    resolver: zodResolver(veterinaryReleaseSchema),
  });

  const submitRelease = trpc.veterinaryRelease.create.useMutation({
    onSuccess: () => {
      // Handle success
    },
  });

  const onSubmit = (data: VeterinaryReleaseFormData) => {
    submitRelease.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Veterinary Release Form</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Pet Name</label>
            <input
              type="text"
              {...register('petName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.petName && (
              <p className="mt-1 text-sm text-red-600">{errors.petName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Owner Name</label>
            <input
              type="text"
              {...register('ownerName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.ownerName && (
              <p className="mt-1 text-sm text-red-600">{errors.ownerName.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Veterinarian Information</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Veterinarian Name</label>
            <input
              type="text"
              {...register('veterinarianName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.veterinarianName && (
              <p className="mt-1 text-sm text-red-600">{errors.veterinarianName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Veterinarian Phone</label>
            <input
              type="tel"
              {...register('veterinarianPhone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.veterinarianPhone && (
              <p className="mt-1 text-sm text-red-600">{errors.veterinarianPhone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Veterinarian Address</label>
            <textarea
              {...register('veterinarianAddress')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.veterinarianAddress && (
              <p className="mt-1 text-sm text-red-600">{errors.veterinarianAddress.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Maximum Treatment Cost ($)
          </label>
          <input
            type="number"
            {...register('maxTreatmentCost', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.maxTreatmentCost && (
            <p className="mt-1 text-sm text-red-600">{errors.maxTreatmentCost.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                {...register('emergencyContact')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.emergencyContact && (
                <p className="mt-1 text-sm text-red-600">{errors.emergencyContact.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                {...register('emergencyPhone')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.emergencyPhone && (
                <p className="mt-1 text-sm text-red-600">{errors.emergencyPhone.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('authorization')}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I authorize emergency veterinary treatment up to the specified maximum cost
            </label>
          </div>
          {errors.authorization && (
            <p className="mt-1 text-sm text-red-600">{errors.authorization.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Digital Signature</label>
          <input
            type="text"
            {...register('signature')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.signature && (
            <p className="mt-1 text-sm text-red-600">{errors.signature.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            {...register('date')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Veterinary Release Form
        </button>
      </div>
    </form>
  );
};

export default VeterinaryReleaseForm;

```

`/Users/oscarvuong/doggo hotel/src/components/forms/LiabilityWaiverForm.tsx`:

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';

const liabilityWaiverSchema = z.object({
  ownerName: z.string().min(1, 'Owner name is required'),
  petName: z.string().min(1, 'Pet name is required'),
  acknowledgement: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the waiver terms',
  }),
  emergencyContact: z.string().min(1, 'Emergency contact is required'),
  signature: z.string().min(1, 'Digital signature is required'),
  date: z.string().min(1, 'Date is required'),
});

type LiabilityWaiverFormData = z.infer<typeof liabilityWaiverSchema>;

const LiabilityWaiverForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LiabilityWaiverFormData>({
    resolver: zodResolver(liabilityWaiverSchema),
  });

  const submitWaiver = trpc.waiver.create.useMutation({
    onSuccess: () => {
      // Handle success (e.g., show success message, redirect)
    },
  });

  const onSubmit = (data: LiabilityWaiverFormData) => {
    submitWaiver.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Liability Waiver</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Owner Name</label>
          <input
            type="text"
            {...register('ownerName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.ownerName && (
            <p className="mt-1 text-sm text-red-600">{errors.ownerName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Pet Name</label>
          <input
            type="text"
            {...register('petName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.petName && (
            <p className="mt-1 text-sm text-red-600">{errors.petName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
          <input
            type="text"
            {...register('emergencyContact')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.emergencyContact && (
            <p className="mt-1 text-sm text-red-600">{errors.emergencyContact.message}</p>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-2">Waiver Terms</h3>
          <p className="text-sm text-gray-600 mb-4">
            By signing this waiver, I acknowledge and agree that:
            1. I understand the inherent risks associated with dog boarding services.
            2. I release the facility from liability for any injury or illness to my pet.
            3. I authorize emergency medical treatment if necessary.
            4. I agree to pay all costs associated with any necessary medical treatment.
          </p>
          
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('acknowledgement')}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I have read and agree to the terms above
            </label>
          </div>
          {errors.acknowledgement && (
            <p className="mt-1 text-sm text-red-600">{errors.acknowledgement.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Digital Signature</label>
          <input
            type="text"
            {...register('signature')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.signature && (
            <p className="mt-1 text-sm text-red-600">{errors.signature.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            {...register('date')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit Waiver
        </button>
      </div>
    </form>
  );
};

export default LiabilityWaiverForm;

```

`/Users/oscarvuong/doggo hotel/src/components/forms/KennelForm.tsx`:

```tsx
/**
 * Kennel Form Component
 * 
 * A reusable form component for creating and editing kennels.
 * Includes validation and handles both creation and update operations.
 */

import { type FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { type RouterOutputs } from "~/utils/api";

const kennelFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  size: z.enum(["SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"], {
    required_error: "Please select a kennel size",
  }),
  dailyRate: z.string().transform((val) => parseFloat(val)),
  description: z.string().optional(),
  features: z.string().transform((val) => val.split(",").map((f) => f.trim())),
  status: z.enum(["AVAILABLE", "OCCUPIED", "MAINTENANCE", "RESERVED"], {
    required_error: "Please select a status",
  }),
  location: z.string().optional(),
  notes: z.string().optional(),
  maxWeight: z.string().transform((val) => parseFloat(val)),
});

type KennelFormData = z.infer<typeof kennelFormSchema>;

interface KennelFormProps {
  initialData?: RouterOutputs["kennel"]["getById"];
  onSubmit: (data: KennelFormData) => void;
  isSubmitting?: boolean;
}

export const KennelForm: FC<KennelFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting,
}) => {
  const form = useForm<KennelFormData>({
    resolver: zodResolver(kennelFormSchema),
    defaultValues: {
      name: initialData?.name ?? "",
      size: initialData?.size ?? "MEDIUM",
      dailyRate: initialData?.dailyRate?.toString() ?? "",
      description: initialData?.description ?? "",
      features: initialData?.features?.join(", ") ?? "",
      status: initialData?.status ?? "AVAILABLE",
      location: initialData?.location ?? "",
      notes: initialData?.notes ?? "",
      maxWeight: initialData?.maxWeight?.toString() ?? "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Information</h3>
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., K9 Suite 1" {...field} />
                </FormControl>
                <FormDescription>
                  A unique identifier for this kennel
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="SMALL">Small</SelectItem>
                      <SelectItem value="MEDIUM">Medium</SelectItem>
                      <SelectItem value="LARGE">Large</SelectItem>
                      <SelectItem value="EXTRA_LARGE">Extra Large</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    The size category of the kennel
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AVAILABLE">Available</SelectItem>
                      <SelectItem value="OCCUPIED">Occupied</SelectItem>
                      <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
                      <SelectItem value="RESERVED">Reserved</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Current availability status
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="dailyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Daily Rate ($)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormDescription>
                    Daily rate for this kennel
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="maxWeight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Weight (lbs)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormDescription>
                    Maximum weight limit for pets
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Additional Information</h3>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the kennel's amenities and features..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Detailed description of the kennel
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Features</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Window View, Heated Floor, Private Yard"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Comma-separated list of features
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Building A, First Floor"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Physical location within the facility
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any additional notes about the kennel..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Internal notes and special instructions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : initialData
            ? "Update Kennel"
            : "Create Kennel"}
        </Button>
      </form>
    </Form>
  );
};

```

`/Users/oscarvuong/doggo hotel/src/components/layout/DashboardLayout.tsx`:

```tsx
import { type ReactNode } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Role } from "@prisma/client";
import {
  Home,
  Dog,
  Calendar,
  DollarSign,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
}

interface NavItem {
  name: string;
  href: string;
  icon: typeof Home;
  roles: Role[];
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: Home, roles: ["PET_OWNER", "STAFF", "MANAGER", "ADMIN"] },
  { name: "My Pets", href: "/pets", icon: Dog, roles: ["PET_OWNER"] },
  { name: "Kennels", href: "/kennels", icon: Home, roles: ["STAFF", "MANAGER", "ADMIN"] },
  { name: "Reservations", href: "/reservations", icon: Calendar, roles: ["PET_OWNER", "STAFF", "MANAGER", "ADMIN"] },
  { name: "Payments", href: "/payments", icon: DollarSign, roles: ["PET_OWNER", "MANAGER", "ADMIN"] },
  { name: "Settings", href: "/settings", icon: Settings, roles: ["PET_OWNER", "STAFF", "MANAGER", "ADMIN"] },
];

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Redirect to login if not authenticated
  if (status === "unauthenticated") {
    void router.push("/auth/signin");
    return null;
  }

  // Show loading state
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const filteredNavigation = navigation.filter((item) =>
    item.roles.includes(session.user.role as Role)
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className="fixed inset-0 z-40 flex">
          <div
            className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-linear ${
              sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setSidebarOpen(false)}
          />

          <div
            className={`relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4 transition duration-300 ease-in-out transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold">Doggo Hotel</h1>
            </div>

            <div className="mt-5 h-0 flex-1 overflow-y-auto">
              <nav className="space-y-1 px-2">
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center rounded-md px-2 py-2 text-base font-medium ${
                      router.pathname === item.href
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-4 h-6 w-6 flex-shrink-0 ${
                        router.pathname === item.href
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-2xl font-bold">Doggo Hotel</h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    router.pathname === item.href
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${
                      router.pathname === item.href
                        ? "text-gray-500"
                        : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex flex-1 items-center">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">
                  {session.user.name}
                </p>
                <p className="text-xs font-medium text-gray-500">
                  {session.user.role}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => void signOut()}
              className="ml-auto"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

```

`/Users/oscarvuong/doggo hotel/src/components/dashboard/MainDashboard.tsx`:

```tsx
import { type ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface DashboardMetric {
  label: string;
  value: string | number;
  trend?: number;
  trendLabel?: string;
}

interface DashboardProps {
  metrics: {
    activeReservations: DashboardMetric;
    occupancyRate: DashboardMetric;
    revenue: DashboardMetric;
    availableKennels: DashboardMetric;
  };
  recentActivity: {
    type: 'CHECK_IN' | 'CHECK_OUT';
    petName: string;
    ownerName: string;
    kennelNumber: string;
    timestamp: string;
  }[];
  occupancyData: {
    date: string;
    small: number;
    medium: number;
    large: number;
  }[];
}

export function MainDashboard({ metrics, recentActivity, occupancyData }: DashboardProps) {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Reservations
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.activeReservations.value}
            </div>
            <p className="text-xs text-muted-foreground">
              {metrics.activeReservations.trend && metrics.activeReservations.trend > 0 ? '+' : ''}
              {metrics.activeReservations.trend}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Occupancy Rate
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.occupancyRate.value}%
            </div>
            <p className="text-xs text-muted-foreground">
              {metrics.occupancyRate.trendLabel}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${metrics.revenue.value}</div>
            <p className="text-xs text-muted-foreground">
              {metrics.revenue.trend && metrics.revenue.trend > 0 ? '+' : ''}
              {metrics.revenue.trend}% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available Kennels
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.availableKennels.value}
            </div>
            <p className="text-xs text-muted-foreground">
              {metrics.availableKennels.trendLabel}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Occupancy Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={occupancyData}>
                <XAxis
                  dataKey="date"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Bar
                  dataKey="small"
                  fill="#adfa1d"
                  radius={[4, 4, 0, 0]}
                  stackId="stack"
                />
                <Bar
                  dataKey="medium"
                  fill="#0ea5e9"
                  radius={[4, 4, 0, 0]}
                  stackId="stack"
                />
                <Bar
                  dataKey="large"
                  fill="#8b5cf6"
                  radius={[4, 4, 0, 0]}
                  stackId="stack"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <div className={`rounded-full p-2 ${
                    activity.type === 'CHECK_IN' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    {activity.type === 'CHECK_IN' ? (
                      <svg
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium">
                      {activity.type === 'CHECK_IN' ? 'Check In' : 'Check Out'}: {activity.petName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Owner: {activity.ownerName} • Kennel: {activity.kennelNumber}
                    </p>
                  </div>
                  <div className="ml-auto text-sm text-muted-foreground">
                    {activity.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

```

`/Users/oscarvuong/doggo hotel/src/components/dashboard/ManagerDashboard.tsx`:

```tsx
import React from 'react';
import { trpc } from '../../utils/trpc';
import { useSession } from 'next-auth/react';

const ManagerDashboard: React.FC = () => {
  const { data: session } = useSession();
  const { data: staff } = trpc.user.getAllStaff.useQuery();
  const { data: kennels } = trpc.kennel.getAll.useQuery();
  const { data: reservations } = trpc.reservation.getAll.useQuery();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manager Dashboard</h1>
      
      {/* Staff Management Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Staff Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {staff?.map((member) => (
            <div key={member.id} className="p-4 border rounded-lg shadow">
              <h3 className="font-semibold">{member.name}</h3>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
              <div className="mt-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility Management Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Facility Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Kennel Statistics */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Kennel Statistics</h3>
            <p>Total Kennels: {kennels?.length}</p>
            <p>Available: {kennels?.filter(k => k.status === 'AVAILABLE').length}</p>
            <p>Occupied: {kennels?.filter(k => k.status === 'OCCUPIED').length}</p>
          </div>
          
          {/* Revenue Statistics */}
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Revenue Statistics</h3>
            <p>Today's Revenue: $XXX</p>
            <p>Monthly Revenue: $XXX</p>
            <p>Pending Payments: X</p>
          </div>
        </div>
      </section>

      {/* Reservations Overview */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Reservations Overview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Pet</th>
                <th className="px-4 py-2">Owner</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Payment</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations?.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="px-4 py-2">{reservation.id}</td>
                  <td className="px-4 py-2">{reservation.pet.name}</td>
                  <td className="px-4 py-2">{reservation.user.email}</td>
                  <td className="px-4 py-2">
                    {reservation.startDate.toLocaleDateString()} - 
                    {reservation.endDate.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{reservation.status}</td>
                  <td className="px-4 py-2">{reservation.payment.status}</td>
                  <td className="px-4 py-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ManagerDashboard;

```

`/Users/oscarvuong/doggo hotel/src/components/dashboard/KennelOccupancyChart.tsx`:

```tsx
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { trpc } from '../../utils/trpc';

interface OccupancyData {
  date: string;
  occupied: number;
  available: number;
}

const KennelOccupancyChart: React.FC = () => {
  const { data: occupancyData, isLoading } = trpc.kennel.getOccupancyStats.useQuery();

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-64 bg-gray-200 rounded"></div>
      </div>
    );
  }

  const chartData: OccupancyData[] = occupancyData?.map(item => ({
    date: new Date(item.date).toLocaleDateString(),
    occupied: item.occupied,
    available: item.available,
  })) ?? [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Kennel Occupancy</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="occupied" stackId="a" fill="#4F46E5" name="Occupied" />
            <Bar dataKey="available" stackId="a" fill="#93C5FD" name="Available" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default KennelOccupancyChart;

```

`/Users/oscarvuong/doggo hotel/src/components/dashboard/StaffDashboard.tsx`:

```tsx
import React from 'react';
import { trpc } from '~/utils/trpc';
import { useSession } from 'next-auth/react';

const StaffDashboard: React.FC = () => {
  const { data: session } = useSession();
  const { data: kennels } = trpc.kennel.getAll.useQuery();
  const { data: reservations } = trpc.reservation.getAll.useQuery(undefined, {
    select: (data) => data.map((reservation) => ({
      ...reservation,
      pet: { name: reservation.petId }, // Temporary until we implement proper includes
      user: { email: reservation.userId } // Temporary until we implement proper includes
    }))
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Staff Dashboard</h1>
      
      {/* Kennel Management Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Kennel Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kennels?.map((kennel) => (
            <div key={kennel.id} className="p-4 border rounded-lg shadow">
              <h3 className="font-semibold">Kennel {kennel.id}</h3>
              <p>Size: {kennel.size}</p>
              <p>Status: {kennel.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservations Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Today's Reservations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Pet Name</th>
                <th className="px-4 py-2">Owner</th>
                <th className="px-4 py-2">Check-in</th>
                <th className="px-4 py-2">Check-out</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations?.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="px-4 py-2">{reservation.pet.name}</td>
                  <td className="px-4 py-2">{reservation.user.email}</td>
                  <td className="px-4 py-2">{reservation.startDate.toLocaleDateString()}</td>
                  <td className="px-4 py-2">{reservation.endDate.toLocaleDateString()}</td>
                  <td className="px-4 py-2">{reservation.status}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                      Check-in
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      Check-out
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default StaffDashboard;

```

`/Users/oscarvuong/doggo hotel/src/components/dashboard/RevenueMetrics.tsx`:

```tsx
import React from 'react';
import { trpc } from '../../utils/trpc';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  loading?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, loading }) => {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <p className={`ml-2 flex items-baseline text-sm font-semibold ${
          change >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
        </p>
      </div>
    </div>
  );
};

const RevenueMetrics: React.FC = () => {
  const { data: metrics, isLoading: metricsLoading } = trpc.revenue.getMetrics.useQuery();
  const { data: revenueHistory, isLoading: historyLoading } = trpc.revenue.getHistory.useQuery();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Monthly Revenue"
          value={metricsLoading ? '-' : formatCurrency(metrics?.monthlyRevenue ?? 0)}
          change={metrics?.monthlyChange ?? 0}
          loading={metricsLoading}
        />
        <MetricCard
          title="Average Daily Revenue"
          value={metricsLoading ? '-' : formatCurrency(metrics?.avgDailyRevenue ?? 0)}
          change={metrics?.dailyChange ?? 0}
          loading={metricsLoading}
        />
        <MetricCard
          title="Outstanding Payments"
          value={metricsLoading ? '-' : formatCurrency(metrics?.outstandingPayments ?? 0)}
          change={metrics?.outstandingChange ?? 0}
          loading={metricsLoading}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
        <div className="h-64">
          {historyLoading ? (
            <div className="animate-pulse h-full bg-gray-200 rounded"></div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueHistory}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <YAxis
                  tickFormatter={(value) => formatCurrency(value)}
                />
                <Tooltip
                  formatter={(value: number) => [formatCurrency(value), 'Revenue']}
                  labelFormatter={(label) => new Date(label).toLocaleDateString()}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4F46E5"
                  name="Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Status</h3>
          <div className="space-y-4">
            {!metricsLoading && metrics?.paymentStatus && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Paid</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.paymentStatus.paid)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Pending</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.paymentStatus.pending)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Overdue</span>
                  <span className="text-sm font-medium text-red-600">
                    {formatCurrency(metrics.paymentStatus.overdue)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Sources</h3>
          <div className="space-y-4">
            {!metricsLoading && metrics?.revenueSources && (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Boarding</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.revenueSources.boarding)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Additional Services</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.revenueSources.additionalServices)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Other</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(metrics.revenueSources.other)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueMetrics;

```

`/Users/oscarvuong/doggo hotel/src/components/PetOwnerDashboard.tsx`:

```tsx
import React, { useEffect, useState } from 'react';

const PetOwnerDashboard: React.FC = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/trpc/pet.getByOwnerId'); 
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div key={pet.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetOwnerDashboard;

```

`/Users/oscarvuong/doggo hotel/src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

`/Users/oscarvuong/doggo hotel/src/index.ts`:

```ts
import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import appRouter from './server/trpc';
import { createContext } from './server/trpc/context';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get('/', (req, res) => {
  res.send('Doggo Hotel Backend is running');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
```

`/Users/oscarvuong/doggo hotel/src/pages/index.tsx`:

```tsx
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      void router.push("/dashboard");
    } else if (status === "unauthenticated") {
      void router.push("/auth/signin");
    }
  }, [status, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
    </div>
  );
};

export default Home;

```

`/Users/oscarvuong/doggo hotel/src/pages/auth/register.tsx`:

```tsx
import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = api.auth.register.useMutation({
    onSuccess: async (data) => {
      // Sign in the user after successful registration
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError("Failed to sign in after registration");
        return;
      }

      await router.push("/dashboard");
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation.mutate({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                {...register("name")}
                type="text"
                autoComplete="name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                autoComplete="new-password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                autoComplete="new-password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={registerMutation.isLoading}
            className="w-full"
          >
            {registerMutation.isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;

```

`/Users/oscarvuong/doggo hotel/src/pages/auth/signin.tsx`:

```tsx
import { type NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "~/components/ui/button";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn: NextPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        setError("Invalid email or password");
        return;
      }

      await router.push("/dashboard");
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to Doggo Hotel
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              href="/auth/register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                autoComplete="current-password"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

```

`/Users/oscarvuong/doggo hotel/src/pages/reservations/index.tsx`:

```tsx
import { useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { ReservationForm } from "~/components/forms/ReservationForm";
import { Role, ReservationStatus } from "@prisma/client";

export default function ReservationsPage() {
  const { data: session } = useSession();
  const [showForm, setShowForm] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<ReservationStatus | "ALL">("ALL");

  const { data: reservations, isLoading } = api.reservation.getAll.useQuery(
    selectedStatus === "ALL" ? undefined : { status: selectedStatus }
  );

  const updateStatus = api.reservation.updateStatus.useMutation({
    onSuccess: () => {
      utils.reservation.getAll.invalidate();
    },
  });

  const cancelReservation = api.reservation.cancel.useMutation({
    onSuccess: () => {
      utils.reservation.getAll.invalidate();
    },
  });

  const utils = api.useContext();

  const handleStatusChange = async (id: string, status: ReservationStatus) => {
    try {
      await updateStatus.mutateAsync({ id, status });
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleCancel = async (id: string) => {
    if (window.confirm("Are you sure you want to cancel this reservation?")) {
      try {
        await cancelReservation.mutateAsync(id);
      } catch (error) {
        console.error("Failed to cancel reservation:", error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reservations</h1>
        {session?.user.role === Role.PET_OWNER && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
          >
            {showForm ? "Cancel" : "New Reservation"}
          </button>
        )}
      </div>

      {showForm && (
        <div className="mb-8 rounded-lg border bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">New Reservation</h2>
          <ReservationForm onSuccess={() => setShowForm(false)} />
        </div>
      )}

      <div className="mb-4">
        <label className="mr-2 text-sm font-medium">Filter by status:</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value as ReservationStatus | "ALL")}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="ALL">All</option>
          {Object.values(ReservationStatus).map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Pet
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Kennel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {reservations?.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div>
                      <div className="font-medium">{reservation.pet.name}</div>
                      <div className="text-sm text-gray-500">
                        {reservation.pet.breed}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div>
                      <div>
                        {new Date(reservation.startDate).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        to {new Date(reservation.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div>
                      <div>{reservation.kennel.name}</div>
                      <div className="text-sm text-gray-500">
                        {reservation.kennel.size}
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {[Role.ADMIN, Role.STAFF, Role.MANAGER].includes(
                      session?.user.role as Role
                    ) ? (
                      <select
                        value={reservation.status}
                        onChange={(e) =>
                          handleStatusChange(
                            reservation.id,
                            e.target.value as ReservationStatus
                          )
                        }
                        className="rounded-md border-gray-300 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        {Object.values(ReservationStatus).map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          reservation.status === "CONFIRMED"
                            ? "bg-green-100 text-green-800"
                            : reservation.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-800"
                            : reservation.status === "CANCELLED"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {reservation.status}
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        reservation.payment?.status === "PAID"
                          ? "bg-green-100 text-green-800"
                          : reservation.payment?.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {reservation.payment?.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {reservation.status === "PENDING" && (
                      <button
                        onClick={() => handleCancel(reservation.id)}
                        className="text-sm text-red-600 hover:text-red-900"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

```

`/Users/oscarvuong/doggo hotel/src/pages/pets/index.tsx`:

```tsx
/**
 * Pet List Page
 * 
 * Displays a list of pets owned by the current user or all pets for admin users.
 * Provides functionality to add, edit, and delete pets.
 * 
 * @module pages/pets
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";

const PetsPage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { data: pets, isLoading } = api.pet.getByOwnerId.useQuery();
  const { data: allPets } = api.pet.getAll.useQuery(undefined, {
    enabled: session?.user.role === "ADMIN",
  });

  const displayPets = session?.user.role === "ADMIN" ? allPets : pets;

  /**
   * Navigate to the pet creation page
   */
  const handleAddPet = () => {
    void router.push("/pets/new");
  };

  /**
   * Navigate to the pet details/edit page
   */
  const handlePetClick = (petId: string) => {
    void router.push(`/pets/${petId}`);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div>Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            {session?.user.role === "ADMIN" ? "All Pets" : "My Pets"}
          </h2>
          <Button onClick={handleAddPet}>
            <Plus className="mr-2 h-4 w-4" />
            Add Pet
          </Button>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayPets?.map((pet) => (
            <div
              key={pet.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow transition hover:shadow-md"
              onClick={() => handlePetClick(pet.id)}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {pet.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{pet.breed}</p>
                
                <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date().getFullYear() -
                        new Date(pet.dateOfBirth).getFullYear()}{" "}
                      years
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Weight</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.weight} lbs
                    </dd>
                  </div>
                </dl>

                {session?.user.role === "ADMIN" && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">
                      Owner: {pet.owner.name}
                    </p>
                  </div>
                )}

                {pet.reservations && pet.reservations[0] && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500">
                      Last Stay:{" "}
                      {new Date(
                        pet.reservations[0].startDate
                      ).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 rounded-lg ring-2 ring-transparent transition group-hover:ring-indigo-500" />
            </div>
          ))}

          {displayPets?.length === 0 && (
            <div className="col-span-full">
              <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No pets yet
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by adding your first pet
                </p>
                <div className="mt-6">
                  <Button onClick={handleAddPet}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Pet
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PetsPage;

```

`/Users/oscarvuong/doggo hotel/src/pages/pets/new.tsx`:

```tsx
/**
 * New Pet Page
 * 
 * Page for creating a new pet profile. Uses the PetForm component
 * and handles form submission and navigation.
 * 
 * @module pages/pets/new
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { PetForm } from "~/components/forms/PetForm";
import { api } from "~/utils/api";

const NewPetPage: NextPage = () => {
  const router = useRouter();
  const utils = api.useContext();

  const { mutate: createPet, isLoading } = api.pet.create.useMutation({
    onSuccess: async () => {
      await utils.pet.getByOwnerId.invalidate();
      await router.push("/pets");
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Add New Pet
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the form below to add a new pet to your profile.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <PetForm onSubmit={createPet} isSubmitting={isLoading} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewPetPage;

```

`/Users/oscarvuong/doggo hotel/src/pages/pets/[id].tsx`:

```tsx
/**
 * Pet Details Page
 * 
 * Displays detailed information about a pet and allows editing if authorized.
 * Shows pet information, medical history, and recent reservations.
 * 
 * @module pages/pets/[id]
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { PetForm } from "~/components/forms/PetForm";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import { Pencil, Trash2, AlertTriangle } from "lucide-react";

const PetDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const utils = api.useContext();
  
  const { data: pet, isLoading } = api.pet.getById.useQuery(id as string, {
    enabled: !!id,
  });

  const { mutate: updatePet, isLoading: isUpdating } = api.pet.update.useMutation(
    {
      onSuccess: async () => {
        await utils.pet.getById.invalidate(id as string);
        setIsEditing(false);
      },
    }
  );

  const { mutate: deletePet, isLoading: isDeleting } = api.pet.delete.useMutation(
    {
      onSuccess: async () => {
        await router.push("/pets");
      },
    }
  );

  const handleUpdate = (data: any) => {
    updatePet({ id: id as string, data });
  };

  const handleDelete = () => {
    deletePet(id as string);
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div>Loading...</div>
      </DashboardLayout>
    );
  }

  if (!pet) {
    return (
      <DashboardLayout>
        <div>Pet not found</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
              {pet.name}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{pet.breed}</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => setIsEditing(!isEditing)}
              disabled={isUpdating}
            >
              <Pencil className="mr-2 h-4 w-4" />
              {isEditing ? "Cancel Edit" : "Edit Pet"}
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowDeleteConfirm(true)}
              disabled={isDeleting}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Pet
            </Button>
          </div>
        </div>

        {/* Delete Confirmation */}
        {showDeleteConfirm && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Delete {pet.name}?
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-red-700">
                    This action cannot be undone. All pet data, including
                    reservations, will be permanently deleted.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex space-x-3">
                    <Button
                      variant="destructive"
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Yes, Delete Pet"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowDeleteConfirm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pet Form or Details */}
        <div className="rounded-lg bg-white p-6 shadow">
          {isEditing ? (
            <PetForm
              initialData={pet}
              onSubmit={handleUpdate}
              isSubmitting={isUpdating}
            />
          ) : (
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Basic Information
                </h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {new Date().getFullYear() -
                        new Date(pet.dateOfBirth).getFullYear()}{" "}
                      years
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Weight</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.weight} lbs
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Medical Information */}
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Medical Information
                </h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Medical Conditions
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.medicalConditions || "None reported"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Medications
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.medications || "None"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Dietary Restrictions
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.dietaryRestrictions || "None"}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Emergency Contacts */}
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Emergency Contacts
                </h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Emergency Contact
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.emergencyContactName}
                      <br />
                      {pet.emergencyContactPhone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Veterinarian
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {pet.vetName || "Not specified"}
                      {pet.vetPhone && <br />}
                      {pet.vetPhone}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Recent Stays */}
              {pet.reservations && pet.reservations.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Recent Stays
                  </h3>
                  <div className="mt-4 overflow-hidden rounded-md border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Check-in
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Check-out
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {pet.reservations.map((reservation) => (
                          <tr key={reservation.id}>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              {new Date(
                                reservation.startDate
                              ).toLocaleDateString()}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              {new Date(reservation.endDate).toLocaleDateString()}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm">
                              <span
                                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                  reservation.status === "CONFIRMED"
                                    ? "bg-green-100 text-green-800"
                                    : reservation.status === "PENDING"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {reservation.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PetDetailsPage;

```

`/Users/oscarvuong/doggo hotel/src/pages/dashboard/index.tsx`:

```tsx
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { MainDashboard } from "~/components/dashboard/MainDashboard";
import { api } from "~/utils/api";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  const { data: metrics } = api.dashboard.getMetrics.useQuery(undefined, {
    enabled: !!session,
    select: (data) => ({
      activeReservations: {
        label: "Active Reservations",
        value: data.activeReservations.value,
        trend: data.activeReservations.trend
      },
      occupancyRate: {
        label: "Occupancy Rate",
        value: data.occupancyRate.value,
        trendLabel: data.occupancyRate.trendLabel
      },
      revenue: {
        label: "Revenue",
        value: data.revenue.value,
        trend: data.revenue.trend
      },
      availableKennels: {
        label: "Available Kennels",
        value: data.availableKennels.value,
        trendLabel: data.availableKennels.trendLabel
      }
    })
  });

  const { data: recentActivity } = api.dashboard.getRecentActivity.useQuery(undefined, {
    enabled: !!session,
    select: (data) => data.map(activity => ({
      type: activity.type as 'CHECK_IN' | 'CHECK_OUT',
      petName: activity.petName,
      ownerName: activity.ownerName,
      kennelNumber: activity.kennelNumber,
      timestamp: activity.timestamp
    }))
  });
  const { data: occupancyData } = api.dashboard.getOccupancyData.useQuery(undefined, {
    enabled: !!session,
  });

  if (!metrics || !recentActivity || !occupancyData) {
    return (
      <DashboardLayout>
        <div className="flex h-full items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <MainDashboard
        metrics={metrics}
        recentActivity={recentActivity}
        occupancyData={occupancyData}
      />
    </DashboardLayout>
  );
};

export default Dashboard;

```

`/Users/oscarvuong/doggo hotel/src/pages/api/reservations.ts`:

```ts
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import { prisma } from '~/server/db';
import { withRole } from '~/server/middleware/rbac';
import { ReservationStatus } from '@prisma/client';

/**
 * API route to handle reservations
 * Only accessible by roles: Manager, Facility Admin, System Admin
 */
const handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> = async (req, res) => {
  if (req.method === 'POST') {
    const { petId, kennelId, userId, startDate, endDate } = req.body;

    try {
      const reservation = await prisma.reservation.create({
        data: {
          petId,
          kennelId,
          userId,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          status: ReservationStatus.PENDING,
        },
      });

      res.status(201).json(reservation);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create reservation' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
  return Promise.resolve();
};

export default withRole(['Manager', 'Facility Admin', 'System Admin'])(handler); 
```

`/Users/oscarvuong/doggo hotel/src/pages/api/auth/[...nextauth].ts`:

```ts
import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";

export default NextAuth(authOptions);

```

`/Users/oscarvuong/doggo hotel/src/pages/api/webhooks/stripe.ts`:

```ts
import { buffer } from 'micro';
import Stripe from 'stripe';
import { prisma } from '../../../server/db';
import { env } from '../../../env.mjs';

const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const buf = await buffer(req);
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        await prisma.payment.update({
          where: { stripePaymentId: paymentIntent.id },
          data: {
            status: 'PAID',
            updatedAt: new Date(),
          },
        });
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        await prisma.payment.update({
          where: { stripePaymentId: failedPayment.id },
          data: {
            status: 'FAILED',
            updatedAt: new Date(),
          },
        });
        break;

      case 'charge.refunded':
        const refund = event.data.object;
        await prisma.payment.update({
          where: { stripePaymentId: refund.payment_intent },
          data: {
            status: 'REFUNDED',
            updatedAt: new Date(),
          },
        });
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error(`Error processing webhook: ${err.message}`);
    res.status(500).json({ error: 'Webhook handler failed' });
  }
}

```

`/Users/oscarvuong/doggo hotel/src/pages/kennels/index.tsx`:

```tsx
/**
 * Kennel List Page
 * 
 * Displays a list of all kennels with their current status and allows filtering
 * based on size, availability, and date range.
 */

import { type NextPage } from "next";
import { useState } from "react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { api } from "~/utils/api";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useRouter } from "next/router";
import { Calendar } from "~/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { Badge } from "~/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { cn } from "~/lib/utils";

const KennelListPage: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>();
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const { data: kennels, isLoading } = api.kennel.getAll.useQuery(
    {
      size: selectedSize as "SMALL" | "MEDIUM" | "LARGE" | "EXTRA_LARGE" | undefined,
      status: selectedStatus as
        | "AVAILABLE"
        | "OCCUPIED"
        | "MAINTENANCE"
        | "RESERVED"
        | undefined,
      startDate: dateRange.from,
      endDate: dateRange.to,
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-green-100 text-green-800";
      case "OCCUPIED":
        return "bg-blue-100 text-blue-800";
      case "MAINTENANCE":
        return "bg-yellow-100 text-yellow-800";
      case "RESERVED":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSizeDescription = (size: string) => {
    switch (size) {
      case "SMALL":
        return "Ideal for cats and small dogs up to 20 lbs";
      case "MEDIUM":
        return "Perfect for dogs 20-40 lbs";
      case "LARGE":
        return "Suitable for dogs 40-70 lbs";
      case "EXTRA_LARGE":
        return "Designed for dogs over 70 lbs";
      default:
        return "";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
              Kennels
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage and view all kennel units
            </p>
          </div>
          {session?.user.role === "ADMIN" && (
            <Button onClick={() => router.push("/kennels/new")}>
              <Plus className="mr-2 h-4 w-4" />
              Add Kennel
            </Button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <Select onValueChange={setSelectedSize}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All sizes</SelectItem>
              <SelectItem value="SMALL">Small</SelectItem>
              <SelectItem value="MEDIUM">Medium</SelectItem>
              <SelectItem value="LARGE">Large</SelectItem>
              <SelectItem value="EXTRA_LARGE">Extra Large</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All statuses</SelectItem>
              <SelectItem value="AVAILABLE">Available</SelectItem>
              <SelectItem value="OCCUPIED">Occupied</SelectItem>
              <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
              <SelectItem value="RESERVED">Reserved</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !dateRange.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} -{" "}
                      {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={{
                  from: dateRange.from,
                  to: dateRange.to,
                }}
                onSelect={(range) => {
                  setDateRange({
                    from: range?.from,
                    to: range?.to,
                  });
                }}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Kennel Grid */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kennels?.map((kennel) => (
              <Card
                key={kennel.id}
                className="cursor-pointer transition-all hover:shadow-lg"
                onClick={() => router.push(`/kennels/${kennel.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{kennel.name}</CardTitle>
                      <CardDescription>{getSizeDescription(kennel.size)}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(kennel.status)}>
                      {kennel.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Size:</span>{" "}
                      <span>{kennel.size}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        Daily Rate:
                      </span>{" "}
                      <span>${kennel.dailyRate}</span>
                    </div>
                    {kennel.features && kennel.features.length > 0 && (
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Features:
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {kennel.features.map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  {kennel.reservations.length > 0 && (
                    <p className="text-sm text-gray-500">
                      Next reservation:{" "}
                      {format(
                        new Date(kennel.reservations[0]?.startDate),
                        "MMM d, yyyy"
                      )}
                    </p>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default KennelListPage;

```

`/Users/oscarvuong/doggo hotel/src/pages/kennels/new.tsx`:

```tsx
/**
 * New Kennel Page
 * 
 * Page for creating a new kennel. Uses the KennelForm component
 * and handles form submission and navigation.
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { KennelForm } from "~/components/forms/KennelForm";
import { api } from "~/utils/api";

const NewKennelPage: NextPage = () => {
  const router = useRouter();
  const utils = api.useContext();

  const { mutate: createKennel, isLoading } = api.kennel.create.useMutation({
    onSuccess: async () => {
      await utils.kennel.getAll.invalidate();
      await router.push("/kennels");
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
            Add New Kennel
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the form below to add a new kennel to your facility.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <KennelForm onSubmit={createKennel} isSubmitting={isLoading} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewKennelPage;

```

`/Users/oscarvuong/doggo hotel/src/pages/kennels/[id].tsx`:

```tsx
/**
 * Kennel Details Page
 * 
 * Displays detailed information about a kennel and allows editing if authorized.
 * Shows kennel information, current status, and upcoming reservations.
 */

import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { DashboardLayout } from "~/components/layout/DashboardLayout";
import { KennelForm } from "~/components/forms/KennelForm";
import { Button } from "~/components/ui/button";
import { api } from "~/utils/api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Badge } from "~/components/ui/badge";
import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";

const KennelDetailsPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const utils = api.useContext();

  const { data: kennel, isLoading } = api.kennel.getById.useQuery(
    id as string,
    {
      enabled: !!id,
    }
  );

  const { mutate: updateKennel, isLoading: isUpdating } =
    api.kennel.update.useMutation({
      onSuccess: async () => {
        await utils.kennel.getById.invalidate(id as string);
        setIsEditing(false);
      },
    });

  const { mutate: deleteKennel, isLoading: isDeleting } =
    api.kennel.delete.useMutation({
      onSuccess: async () => {
        await router.push("/kennels");
      },
    });

  const handleUpdate = (data: any) => {
    updateKennel({ id: id as string, data });
  };

  const handleDelete = () => {
    deleteKennel(id as string);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-green-100 text-green-800";
      case "OCCUPIED":
        return "bg-blue-100 text-blue-800";
      case "MAINTENANCE":
        return "bg-yellow-100 text-yellow-800";
      case "RESERVED":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div>Loading...</div>
      </DashboardLayout>
    );
  }

  if (!kennel) {
    return (
      <DashboardLayout>
        <div>Kennel not found</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl">
                {kennel.name}
              </h2>
              <Badge className={getStatusColor(kennel.status)}>
                {kennel.status}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {kennel.size} Kennel • ${kennel.dailyRate}/day
            </p>
          </div>
          {session?.user.role === "ADMIN" && (
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
                disabled={isUpdating}
              >
                <Pencil className="mr-2 h-4 w-4" />
                {isEditing ? "Cancel Edit" : "Edit Kennel"}
              </Button>
              <Button
                variant="destructive"
                onClick={() => setShowDeleteDialog(true)}
                disabled={isDeleting}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Kennel
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="rounded-lg bg-white p-6 shadow">
          {isEditing ? (
            <KennelForm
              initialData={kennel}
              onSubmit={handleUpdate}
              isSubmitting={isUpdating}
            />
          ) : (
            <div className="space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-medium">Basic Information</h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Size</dt>
                    <dd className="mt-1">{kennel.size}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Daily Rate
                    </dt>
                    <dd className="mt-1">${kennel.dailyRate}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Maximum Weight
                    </dt>
                    <dd className="mt-1">{kennel.maxWeight} lbs</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1">{kennel.location || "Not specified"}</dd>
                  </div>
                </dl>
              </div>

              {/* Description and Features */}
              <div>
                <h3 className="text-lg font-medium">Description & Features</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Description
                    </dt>
                    <dd className="mt-1 whitespace-pre-wrap">
                      {kennel.description || "No description provided"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">
                      Features
                    </dt>
                    <dd className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        {kennel.features?.map((feature) => (
                          <Badge key={feature} variant="secondary">
                            {feature}
                          </Badge>
                        )) || "No features listed"}
                      </div>
                    </dd>
                  </div>
                </div>
              </div>

              {/* Upcoming Reservations */}
              {kennel.reservations && kennel.reservations.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium">Upcoming Reservations</h3>
                  <div className="mt-4">
                    <div className="overflow-hidden rounded-lg border border-gray-200">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Pet
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Check-in
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Check-out
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {kennel.reservations.map((reservation) => (
                            <tr
                              key={reservation.id}
                              className="cursor-pointer hover:bg-gray-50"
                              onClick={() =>
                                router.push(`/reservations/${reservation.id}`)
                              }
                            >
                              <td className="whitespace-nowrap px-6 py-4">
                                <div className="flex items-center">
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {reservation.pet.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {reservation.pet.breed}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                {format(
                                  new Date(reservation.startDate),
                                  "MMM d, yyyy"
                                )}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                {format(
                                  new Date(reservation.endDate),
                                  "MMM d, yyyy"
                                )}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <Badge
                                  className={
                                    reservation.status === "CONFIRMED"
                                      ? "bg-green-100 text-green-800"
                                      : reservation.status === "PENDING"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-gray-100 text-gray-800"
                                  }
                                >
                                  {reservation.status}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes */}
              {kennel.notes && (
                <div>
                  <h3 className="text-lg font-medium">Notes</h3>
                  <div className="mt-4 whitespace-pre-wrap rounded-md bg-gray-50 p-4 text-sm">
                    {kennel.notes}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Kennel</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this kennel? This action cannot be
              undone, and all associated data will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DashboardLayout>
  );
};

export default KennelDetailsPage;

```

`/Users/oscarvuong/doggo hotel/src/pages/_app.tsx`:

```tsx
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);

```