from typing import Annotated, List
from fastapi import APIRouter, Body, HTTPException

from utils.available_models import list_available_azureopenai_compatible_models
from utils.get_env import get_azureopenai_api_version_env

api_version = get_azureopenai_api_version_env()
AZUREOPENAI_ROUTER = APIRouter(prefix="/openai", tags=["OpenAI"])


@AZUREOPENAI_ROUTER.post(f"/models/available?api-version={api_version}", response_model=List[str])
async def get_available_models(
    url: Annotated[str, Body()],
    api_key: Annotated[str, Body()],
):
    try:
        return await list_available_azureopenai_compatible_models(url, api_key)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
