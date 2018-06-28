import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableProject1530112387476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "project",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "datetime",
                    isNullable: false,
                },
                {
                    name: "updated_at",
                    type: "datetime",
                    isNullable: false,
                },
                {
                    name: "deleted_at",
                    type: "datetime",
                    isNullable: true,
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
