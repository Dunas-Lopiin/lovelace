CREATE TABLE "public.eleitores" (
	"id" serial NOT NULL,
	"cpf" varchar(11) NOT NULL UNIQUE,
	"nome" varchar(120) NOT NULL,
	"nome_social" varchar(120) NOT NULL,
	"data_nascimento" DATE NOT NULL,
	"nacionalidades_id" varchar(30) NOT NULL,
	"nivel_escolar_id" varchar(120) NOT NULL,
	"formacao" varchar(255) NOT NULL,
	"data_criacao" TIMESTAMP NOT NULL,
	"usuario_criacao" varchar(50) NOT NULL,
	CONSTRAINT "eleitores_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.enderecos" (
	"id" serial NOT NULL,
	"eleitor_id" integer NOT NULL,
	"cep" varchar(8) NOT NULL,
	"uf_id" varchar(2) NOT NULL,
	"cidades_id" varchar(120) NOT NULL,
	"municipios_id" varchar(120) NOT NULL,
	"rua" varchar(255) NOT NULL,
	"numero" varchar(10) NOT NULL,
	"complemento" varchar(10) NOT NULL,
	"data_criacao" TIMESTAMP NOT NULL,
	"usuario_criacao" varchar(50) NOT NULL,
	CONSTRAINT "enderecos_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.telefones" (
	"eleitor_id" integer NOT NULL,
	"ddd" varchar(2) NOT NULL,
	"numero" varchar(15) NOT NULL,
	"tipo" varchar(20) NOT NULL,
	"data_criacao" TIMESTAMP NOT NULL,
	"usuario_criacao" varchar(50) NOT NULL,
	CONSTRAINT "telefones_pk" PRIMARY KEY ("eleitor_id","ddd","numero")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.dados_complementares" (
	"id" serial NOT NULL,
	"eleitor_id" integer NOT NULL,
	"etnia_id" varchar(120) NOT NULL,
	"genero_id" varchar(120) NOT NULL,
	"religiao_id" varchar(120) NOT NULL,
	"data_criacao" TIMESTAMP NOT NULL,
	"usuario_criacao" varchar(50) NOT NULL,
	CONSTRAINT "dados_complementares_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.eleitores_interesses" (
	"id" serial NOT NULL,
	"eleitor_id" integer NOT NULL,
	"filiacoes_id" varchar(120) NOT NULL,
	"data_criacao" TIMESTAMP NOT NULL,
	"usuario_criacao" varchar(50) NOT NULL,
	CONSTRAINT "eleitores_interesses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.redes_sociais" (
	"id" serial NOT NULL,
	"eleitor_id" integer NOT NULL,
	"categoria_id" varchar(50) NOT NULL,
	"data_criacao" TIMESTAMP NOT NULL,
	"usuario_criacao" varchar(50) NOT NULL,
	CONSTRAINT "redes_sociais_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.categorias_redes" (
	"id" serial NOT NULL,
	"nome" varchar(120) NOT NULL,
	"usuario" varchar(255) NOT NULL,
	CONSTRAINT "categorias_redes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.complementares_etnias" (
	"id" serial NOT NULL,
	"nome" varchar(120) NOT NULL,
	CONSTRAINT "complementares_etnias_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.complementares_generos" (
	"id" serial NOT NULL,
	"nome" serial(120) NOT NULL,
	CONSTRAINT "complementares_generos_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.complementares_religioes" (
	"id" serial NOT NULL,
	"nome" varchar(120) NOT NULL,
	CONSTRAINT "complementares_religioes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.eleitores_nacionalidades" (
	"id" serial NOT NULL,
	"nome" serial(30) NOT NULL,
	CONSTRAINT "eleitores_nacionalidades_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.enderecos_municipios" (
	"id" serial NOT NULL,
	"nome" varchar(120) NOT NULL,
	CONSTRAINT "enderecos_municipios_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.enderecos_cidades" (
	"id" serial NOT NULL,
	"nome" varchar(120) NOT NULL,
	CONSTRAINT "enderecos_cidades_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.enderecos_uf" (
	"id" serial NOT NULL,
	"nome" serial(2) NOT NULL,
	CONSTRAINT "enderecos_uf_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.interesses_filiacoes" (
	"id" serial NOT NULL,
	"nome" serial(120) NOT NULL,
	CONSTRAINT "interesses_filiacoes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.eleitores_nivel_escolar" (
	"id" serial NOT NULL,
	"nome" varchar(120) NOT NULL
) WITH (
  OIDS=FALSE
);



ALTER TABLE "eleitores" ADD CONSTRAINT "eleitores_fk0" FOREIGN KEY ("nacionalidades_id") REFERENCES "eleitores_nacionalidades"("id");
ALTER TABLE "eleitores" ADD CONSTRAINT "eleitores_fk1" FOREIGN KEY ("nivel_escolar_id") REFERENCES "eleitores_nivel_escolar"("id");

ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_fk0" FOREIGN KEY ("eleitor_id") REFERENCES "eleitores"("id");
ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_fk1" FOREIGN KEY ("uf_id") REFERENCES "enderecos_uf"("id");
ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_fk2" FOREIGN KEY ("cidades_id") REFERENCES "enderecos_cidades"("id");
ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_fk3" FOREIGN KEY ("municipios_id") REFERENCES "enderecos_municipios"("id");

ALTER TABLE "telefones" ADD CONSTRAINT "telefones_fk0" FOREIGN KEY ("eleitor_id") REFERENCES "eleitores"("id");

ALTER TABLE "dados_complementares" ADD CONSTRAINT "dados_complementares_fk0" FOREIGN KEY ("eleitor_id") REFERENCES "eleitores"("id");
ALTER TABLE "dados_complementares" ADD CONSTRAINT "dados_complementares_fk1" FOREIGN KEY ("etnia_id") REFERENCES "complementares_etnias"("id");
ALTER TABLE "dados_complementares" ADD CONSTRAINT "dados_complementares_fk2" FOREIGN KEY ("genero_id") REFERENCES "complementares_generos"("id");
ALTER TABLE "dados_complementares" ADD CONSTRAINT "dados_complementares_fk3" FOREIGN KEY ("religiao_id") REFERENCES "complementares_religioes"("id");

ALTER TABLE "eleitores_interesses" ADD CONSTRAINT "eleitores_interesses_fk0" FOREIGN KEY ("eleitor_id") REFERENCES "eleitores"("id");
ALTER TABLE "eleitores_interesses" ADD CONSTRAINT "eleitores_interesses_fk1" FOREIGN KEY ("filiacoes_id") REFERENCES "interesses_filiacoes"("id");

ALTER TABLE "redes_sociais" ADD CONSTRAINT "redes_sociais_fk0" FOREIGN KEY ("eleitor_id") REFERENCES "eleitores"("id");
ALTER TABLE "redes_sociais" ADD CONSTRAINT "redes_sociais_fk1" FOREIGN KEY ("categoria_id") REFERENCES "categorias_redes"("id");



























