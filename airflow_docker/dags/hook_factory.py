from airflow.hooks.postgres_hook import PostgresHook

def get_bushido_db():
    return PostgresHook(postgres_conn_id='bushido_db')
