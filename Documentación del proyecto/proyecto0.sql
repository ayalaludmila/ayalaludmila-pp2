PGDMP         
                z            proyecto    10.21    10.21                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    33114    proyecto    DATABASE     �   CREATE DATABASE proyecto WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Argentina.1252' LC_CTYPE = 'Spanish_Argentina.1252';
    DROP DATABASE proyecto;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    33129 	   categoria    TABLE     l   CREATE TABLE public.categoria (
    categoria_id integer NOT NULL,
    descripcion character varying(20)
);
    DROP TABLE public.categoria;
       public         postgres    false    3            �            1259    33152    clientes    TABLE     �   CREATE TABLE public.clientes (
    cliente_id integer NOT NULL,
    correo character varying(40) NOT NULL,
    "contraseña" character varying(20) NOT NULL
);
    DROP TABLE public.clientes;
       public         postgres    false    3            �            1259    33142    producto    TABLE     �   CREATE TABLE public.producto (
    producto_id integer NOT NULL,
    nombre character varying(20),
    precio numeric(10,2),
    descripcion character varying(40),
    categoria integer
);
    DROP TABLE public.producto;
       public         postgres    false    3            �            1259    33134    supermercado    TABLE     �   CREATE TABLE public.supermercado (
    supermercado_id integer NOT NULL,
    nombre character varying(20),
    imagen_mapa bytea
);
     DROP TABLE public.supermercado;
       public         postgres    false    3            �
          0    33129 	   categoria 
   TABLE DATA               >   COPY public.categoria (categoria_id, descripcion) FROM stdin;
    public       postgres    false    196   �                  0    33152    clientes 
   TABLE DATA               E   COPY public.clientes (cliente_id, correo, "contraseña") FROM stdin;
    public       postgres    false    199   �       �
          0    33142    producto 
   TABLE DATA               W   COPY public.producto (producto_id, nombre, precio, descripcion, categoria) FROM stdin;
    public       postgres    false    198          �
          0    33134    supermercado 
   TABLE DATA               L   COPY public.supermercado (supermercado_id, nombre, imagen_mapa) FROM stdin;
    public       postgres    false    197   ,       z
           2606    33133    categoria categoria_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (categoria_id);
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public         postgres    false    196            �
           2606    33158 !   clientes clientes_contraseña_key 
   CONSTRAINT     g   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT "clientes_contraseña_key" UNIQUE ("contraseña");
 M   ALTER TABLE ONLY public.clientes DROP CONSTRAINT "clientes_contraseña_key";
       public         postgres    false    199            �
           2606    33156    clientes clientes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (cliente_id);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public         postgres    false    199            ~
           2606    33146    producto producto_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (producto_id);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public         postgres    false    198            |
           2606    33141    supermercado supermercado_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.supermercado
    ADD CONSTRAINT supermercado_pkey PRIMARY KEY (supermercado_id);
 H   ALTER TABLE ONLY public.supermercado DROP CONSTRAINT supermercado_pkey;
       public         postgres    false    197            �
           2606    33147    producto fkkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fkkey FOREIGN KEY (categoria) REFERENCES public.categoria(categoria_id);
 8   ALTER TABLE ONLY public.producto DROP CONSTRAINT fkkey;
       public       postgres    false    196    2682    198            �
      x������ � �             x������ � �      �
      x������ � �      �
      x������ � �     