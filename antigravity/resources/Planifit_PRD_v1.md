# PLANIFIT — Product Requirements Document

**Versión:** 1.0
**Fecha:** Marzo 2026
**Tipo:** Aplicación web responsive (mobile-first + desktop)
**Alcance:** MVP — Creación y exportación PDF de programas de entrenamiento

---

## 1. Información General

| Campo | Detalle |
|-------|---------|
| Producto | Planifit |
| Tipo | Aplicación web responsive (mobile-first + desktop) |
| Versión del PRD | 1.0 |
| Fecha | Marzo 2026 |
| Alcance | MVP — Creación y exportación PDF de programas de entrenamiento |
| Modelo de negocio | Freemium (plan gratuito limitado + plan de pago) |
| Usuarios objetivo | Entrenadores personales y coaches de gimnasio |

---

## 2. Problema

Los entrenadores personales y coaches de gimnasio necesitan crear programas de entrenamiento personalizados para sus clientes de forma rápida, profesional y organizada. Actualmente, muchos recurren a hojas de cálculo, notas de texto o aplicaciones genéricas que no están diseñadas para este flujo de trabajo específico.

### Problemas específicos

- No existe una herramienta simple y enfocada en la creación de rutinas exportables.
- Los formatos de entrega (Excel, texto plano) no son profesionales ni fáciles de seguir para el cliente.
- La gestión de múltiples clientes y sus programas es desorganizada.
- No hay una solución que permita incluir enlaces a videos demostrativos de forma integrada.

---

## 3. Solución Propuesta

Planifit es una aplicación web responsive que permite a entrenadores crear programas de entrenamiento estructurados, asignarlos a clientes específicos y exportarlos como PDFs profesionales listos para ser enviados por email.

### Propuesta de valor

- Interfaz intuitiva diseñada específicamente para el flujo de trabajo del entrenador.
- Programas estructurados: Días → Ejercicios con series, repeticiones, intensidad, descanso, notas y links a videos.
- Exportación a PDF profesional con branding del entrenador.
- Gestión de clientes integrada (nombre, objetivo, notas).
- Funciona en cualquier dispositivo: móvil, tablet y desktop.

---

## 4. Persona de Usuario

| Atributo | Descripción |
|----------|-------------|
| Nombre | Carlos — Entrenador Personal |
| Edad | 28–40 años |
| Contexto | Trabaja en un gimnasio o de forma independiente con 5–30 clientes activos |
| Dispositivo principal | Smartphone (crea rutinas entre sesiones), laptop para sesiones de planificación más largas |
| Dolor principal | Pierde tiempo creando rutinas en Excel/notas y el resultado no se ve profesional |
| Meta | Entregar programas claros, profesionales y personalizados a cada cliente de forma rápida |
| Nivel técnico | Medio — usa apps básicas, redes sociales, WhatsApp y email a diario |

---

## 5. Funcionalidades del MVP

### 5.1 Autenticación

- Registro e inicio de sesión con email + contraseña.
- Inicio de sesión con Google OAuth.
- Recuperación de contraseña por email.
- Sesión persistente (mantener sesión iniciada).

### 5.2 Dashboard del Entrenador

- Vista resumen con: número de clientes activos, programas creados, accesos rápidos.
- Navegación principal: Clientes, Programas, Ejercicios, Mi Cuenta.
- Diseño responsive: bottom tabs en mobile, sidebar en desktop.

### 5.3 Gestión de Clientes

- CRUD completo de clientes.
- **Datos del cliente:** nombre completo, email, teléfono (opcional), objetivo de entrenamiento, notas generales.
- Lista de clientes con búsqueda y filtros.
- Vista de detalle del cliente con historial de programas asignados.

### 5.4 Biblioteca de Ejercicios

- CRUD completo de ejercicios creados por el entrenador.
- **Datos del ejercicio:** nombre, grupo muscular/categoría, descripción (opcional), link a video de YouTube (opcional).
- Lista con búsqueda por nombre y filtro por grupo muscular.
- Los ejercicios son reutilizables entre programas.

### 5.5 Creación de Programas

Esta es la funcionalidad core de la aplicación.

#### Estructura del programa

| Nivel | Campos | Notas |
|-------|--------|-------|
| Programa | Nombre, cliente asignado, fecha inicio, fecha fin (opcional), objetivo, notas generales | Un programa pertenece a un cliente |
| Día | Nombre/etiqueta (ej: "Día 1 — Tren superior"), orden | Un programa tiene 1–N días |
| Ejercicio (en día) | Ejercicio (de la biblioteca), series, repeticiones, intensidad/peso, tiempo de descanso, notas, link a video de YouTube | Un día tiene 1–N ejercicios ordenados |

#### Funcionalidades de edición

- Agregar/eliminar/reordenar días dentro de un programa (drag & drop).
- Agregar/eliminar/reordenar ejercicios dentro de un día (drag & drop).
- Buscar y seleccionar ejercicios de la biblioteca al agregar a un día.
- Crear ejercicio nuevo directamente desde el flujo de creación del programa.
- Duplicar días completos dentro del mismo programa.
- Duplicar programas completos (para reutilizar como plantilla).
- Autoguardado periódico o guardado explícito.

### 5.6 Exportación a PDF

- Generar PDF profesional del programa completo.
- **Contenido del PDF:** nombre del programa, datos del cliente, objetivo, cada día con su tabla de ejercicios (series, reps, intensidad, descanso, notas).
- Los links a videos de YouTube se incluyen como URLs clickeables o como códigos QR.
- Branding básico: nombre del entrenador/gym en header o footer.
- Opción de enviar PDF por email directamente desde la app al email del cliente.

### 5.7 Mi Cuenta / Perfil

- Editar nombre, email, nombre del gimnasio/marca.
- Subir logo (usado en el PDF exportado).
- Ver plan actual (Free / Pro).
- Cambiar contraseña.

---

## 6. Modelo Freemium

| Funcionalidad | Plan Free | Plan Pro |
|---------------|-----------|----------|
| Clientes | Hasta 5 | Ilimitados |
| Programas activos | Hasta 10 | Ilimitados |
| Ejercicios en biblioteca | Hasta 30 | Ilimitados |
| Exportación PDF | Con marca de agua de Planifit | Sin marca de agua + logo propio |
| Envío por email | No | Sí |
| Duplicar programas | No | Sí |
| Soporte | Comunidad | Prioritario |

> **Nota:** Los límites del plan Free son orientativos y pueden ajustarse tras validar con usuarios reales. El objetivo es que el plan Free sea útil para entrenadores con pocos clientes, y que el plan Pro sea una inversión clara cuando escalan.

---

## 7. Modelo de Datos (Alto Nivel)

### 7.1 Trainer (Entrenador)

| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| email | string | Unique |
| password_hash | string | Nullable si usa OAuth |
| name | string | Nombre completo |
| gym_name | string (optional) | Nombre del gym/marca |
| logo_url | string (optional) | URL del logo subido |
| plan | enum: free \| pro | Default: free |
| auth_provider | enum: email \| google | Método de autenticación |
| created_at | timestamp | |

### 7.2 Client (Cliente)

| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| trainer_id | UUID | FK → Trainer |
| name | string | Nombre completo |
| email | string (optional) | Para envío de PDF |
| phone | string (optional) | |
| goal | string | Objetivo de entrenamiento |
| notes | text (optional) | Notas generales |
| created_at | timestamp | |

### 7.3 Exercise (Ejercicio)

| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| trainer_id | UUID | FK → Trainer |
| name | string | Nombre del ejercicio |
| muscle_group | string | Grupo muscular / categoría |
| description | text (optional) | Instrucciones |
| video_url | string (optional) | Link a YouTube |
| created_at | timestamp | |

### 7.4 Program (Programa)

| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| trainer_id | UUID | FK → Trainer |
| client_id | UUID | FK → Client |
| name | string | Nombre del programa |
| goal | string (optional) | Objetivo específico |
| start_date | date (optional) | Fecha inicio |
| end_date | date (optional) | Fecha fin |
| notes | text (optional) | Notas generales |
| status | enum: draft \| active \| archived | Default: draft |
| created_at | timestamp | |

### 7.5 ProgramDay (Día del Programa)

| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| program_id | UUID | FK → Program |
| label | string | Ej: "Día 1 — Tren superior" |
| order | integer | Posición en el programa |

### 7.6 ProgramExercise (Ejercicio en Día)

| Campo | Tipo | Notas |
|-------|------|-------|
| id | UUID | PK |
| program_day_id | UUID | FK → ProgramDay |
| exercise_id | UUID | FK → Exercise |
| order | integer | Posición en el día |
| sets | integer | Número de series |
| reps | string | Ej: "12", "8-12", "al fallo" |
| intensity | string (optional) | Ej: "70% RM", "20kg", "RPE 8" |
| rest_seconds | integer (optional) | Tiempo de descanso en segundos |
| notes | text (optional) | Notas específicas |
| video_url | string (optional) | Override del video del ejercicio |

---

## 8. UX / Diseño

### 8.1 Principios de diseño

- **Mobile-first:** la mayoría de entrenadores crearán rutinas desde el celular entre sesiones.
- **Claridad sobre decoración:** priorizar legibilidad y velocidad de uso.
- **Flujos cortos:** crear un programa debe tomar menos de 5 minutos.
- **Feedback inmediato:** confirmaciones visuales en cada acción (guardar, eliminar, exportar).

### 8.2 Navegación

- **Mobile:** Bottom tab bar con 4 tabs: Dashboard, Clientes, Programas, Ejercicios. Menú de perfil accesible desde avatar.
- **Desktop:** Sidebar izquierdo colapsable con las mismas secciones. Header con info del usuario y acciones rápidas.

### 8.3 Identidad visual (dirección)

- Paleta de colores: tonos energéticos pero profesionales (azul, verde, gris oscuro).
- Tipografía: sans-serif moderna (Inter, Plus Jakarta Sans, o similar).
- Iconografía: línea limpia, estilo Lucide o Phosphor.
- El diseño final de identidad visual (logo, colores exactos) se definirá en la fase de diseño UI.

---

## 9. Stack Técnico Sugerido

| Capa | Tecnología | Justificación |
|------|------------|---------------|
| Frontend | Next.js + React + TypeScript | SSR/SSG, excelente DX, ecosistema maduro |
| Estilos | Tailwind CSS | Desarrollo rápido, mobile-first nativo, consistencia |
| Formularios | react-hook-form + Zod | Validación tipada, performance |
| State / Fetching | SWR o TanStack Query | Cache, revalidación, optimistic updates |
| Autenticación | NextAuth.js (Auth.js) | Email + Google OAuth integrado |
| Base de datos | PostgreSQL (Supabase o Neon) | Relacional, escalable, buen tier gratuito |
| ORM | Prisma o Drizzle | Type-safety, migraciones, DX |
| Generación PDF | React-PDF (@react-pdf/renderer) | PDFs desde componentes React |
| Email | Resend o SendGrid | API simple para envío transaccional |
| Storage | Supabase Storage o Cloudflare R2 | Para logos de entrenadores |
| Hosting | Vercel | Despliegue instantáneo, edge functions, buen free tier |
| Drag & Drop | dnd-kit | Accesible, performante, React-native |

---

## 10. Fases de Desarrollo

### Fase 1 — Fundación (Semanas 1–2)

- Setup del proyecto: Next.js + TypeScript + Tailwind + estructura FSD.
- Autenticación completa (email + Google).
- Layout responsive (sidebar desktop + bottom tabs mobile).
- CRUD de Clientes.

### Fase 2 — Core (Semanas 3–4)

- CRUD de Ejercicios (biblioteca personal).
- Creación y edición de Programas con estructura completa.
- Drag & drop para reordenar días y ejercicios.
- Asignación de programa a cliente.

### Fase 3 — Exportación (Semana 5)

- Generación de PDF profesional.
- Branding en PDF (nombre/logo del entrenador).
- Descarga directa del PDF.
- Envío por email al cliente.

### Fase 4 — Monetización y Polish (Semana 6)

- Implementación de límites del plan Free.
- Integración de pagos (Stripe) para plan Pro.
- Pulido de UX, empty states, loading states, error handling.
- Testing E2E de flujos críticos.

---

## 11. Métricas de Éxito

| Métrica | Objetivo (3 meses post-launch) | Cómo se mide |
|---------|-------------------------------|--------------|
| Entrenadores registrados | 100+ | Conteo de cuentas creadas |
| Retención semanal | >40% | Entrenadores activos por semana / total |
| Programas creados | >500 | Total de programas en la plataforma |
| PDFs exportados | >300 | Total de exports realizados |
| Conversión Free → Pro | >5% | Suscriptores Pro / total registrados |
| Tiempo de creación de programa | <5 minutos | Medición de sesiones de creación |

---

## 12. Riesgos y Mitigaciones

| Riesgo | Impacto | Mitigación |
|--------|---------|------------|
| Baja adopción inicial | Alto | Validar con 5–10 entrenadores reales antes de lanzar. Iterar sobre feedback. |
| Competencia (Trainerize, TrueCoach) | Medio | Diferenciarse por simplicidad y enfoque en exportación PDF. No intentar ser una app de tracking. |
| Complejidad del editor de programas en mobile | Alto | Priorizar UX mobile desde el día 1. Prototipar y testear con usuarios reales. |
| Generación de PDF lenta o con problemas de formato | Medio | Usar React-PDF con templates bien testeados. Cache de PDFs generados. |
| Escalabilidad del modelo freemium | Bajo | Los límites del free tier son ajustables. Monitorear costos de infra vs conversión. |

---

## 13. Fuera de Alcance (MVP)

Las siguientes funcionalidades NO están incluidas en el MVP pero son candidatas para futuras versiones:

- Cuenta o portal para el cliente final (tracking, progreso, check-ins).
- Biblioteca de ejercicios precargada con imágenes/videos.
- Plantillas de programas prediseñadas.
- Integración con WhatsApp para envío directo.
- Calendario/planificación de mesociclos.
- Analytics y reportes de uso para el entrenador.
- App nativa (iOS/Android).
- Integración con wearables o apps de fitness.
- Multi-idioma (i18n).

---

## 14. Glosario

| Término | Definición |
|---------|------------|
| Programa | Conjunto estructurado de días de entrenamiento asignado a un cliente |
| Día | Unidad dentro de un programa que agrupa ejercicios para una sesión |
| Ejercicio | Movimiento o actividad física con parámetros configurables |
| Series (sets) | Número de veces que se repite un bloque de repeticiones |
| Repeticiones (reps) | Número de ejecuciones consecutivas de un ejercicio |
| Intensidad | Carga o dificultad (peso, % RM, RPE, etc.) |
| Tiempo de descanso | Pausa entre series, medido en segundos |
| Entrenador | Usuario principal de Planifit que crea programas |
| Cliente | Persona que recibe el programa de entrenamiento exportado |
